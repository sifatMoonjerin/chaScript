import { AST, Token, ValueType, EnvironmentMethods, EnvironmentConstants } from './types';
import { AST_TOKEN_TYPE, ERROR_MESSAGE } from './constants';
import { environment } from './standardLibrary';

const callFunctionExpression = (node: AST): ValueType => {
  const name = node.name as keyof EnvironmentMethods;
  const fn = environment[name];

  if (typeof fn === 'function') {
    const args = node.arguments.map(arg => evaluate(arg));
    return fn(...args);
  } 
    
  throw new ReferenceError(`${ERROR_MESSAGE.INVALID_EXPRESSION} ${name}`);
}

const getIdentifierValue = (token: Token): ValueType => {
  const key = token.value as keyof EnvironmentConstants;

  if (environment.hasOwnProperty(key)) {
    return environment[key] as ValueType;
  } else {
    throw new ReferenceError(`${ERROR_MESSAGE.INVALID_IDENTIFIER} ${key}`);
  }
}

export const evaluate = (node: AST | Token): ValueType => {
  if (node.type === AST_TOKEN_TYPE.CALL_EXPRESSION) {
    return callFunctionExpression(node as AST);
  } else if ('value' in node) {
    return node.type === AST_TOKEN_TYPE.IDENTIFIER ? getIdentifierValue(node) : node.value;
  } else {
    throw new SyntaxError(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
  }
}