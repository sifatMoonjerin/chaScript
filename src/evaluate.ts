import { AST, Token, ValueType, EnvironmentMethods, EnvironmentConstants } from './types';
import { AST_TOKEN_TYPE, ERROR_MESSAGE } from './constants';
import { environment } from './standardLibrary';

const variables: {[k: string]: ValueType} = {};

const callFunctionExpression = (node: AST): ValueType => {
  const name = node.name as keyof EnvironmentMethods;
  const fn = environment[name];

  if (typeof fn === 'function') {
    const args = node.arguments.map(arg => evaluate(arg));
    return fn(...args);
  } 
    
  throw new ReferenceError(`${ERROR_MESSAGE.INVALID_EXPRESSION} ${name}`);
}

const defineVariable = (node: AST): undefined => {
  if (node.arguments.length !== 2) throw new RangeError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 2`);
  
  const variableName = node.arguments[0];
  const variableValue = evaluate(node.arguments[1]);

  if ('value' in variableName && variableName.type === AST_TOKEN_TYPE.IDENTIFIER) {
    if (environment.hasOwnProperty(variableName.value)) throw new ReferenceError(`${ERROR_MESSAGE.INVALID_VARIABLE}`);
    variables[variableName.value] = variableValue;
  } else {
    throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
  }

  return;
}

const getIdentifierValue = (token: Token): ValueType => {
  const key = token.value as keyof EnvironmentConstants;

  if (environment.hasOwnProperty(key)) {
    return environment[key] as ValueType;
  } else if (variables.hasOwnProperty(key)) {
    return variables[key];
  } else {
    throw new ReferenceError(`${ERROR_MESSAGE.INVALID_IDENTIFIER} ${key}`);
  }
}

export const evaluate = (node: AST | Token): ValueType => {
  if (node.type === AST_TOKEN_TYPE.CALL_EXPRESSION) {
    return callFunctionExpression(node as AST);
  } else if (node.type === AST_TOKEN_TYPE.VARIABLE_DECLARATION) {
    return defineVariable(node as AST);
  } else if ('value' in node) {
    return node.type === AST_TOKEN_TYPE.IDENTIFIER ? getIdentifierValue(node) : node.value;
  } else {
    throw new SyntaxError(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
  }
}