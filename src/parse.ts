import { Token, AST } from './types';
import { popTop, peekTop } from './utility';
import { TOKEN_TYPE, AST_TOKEN_TYPE, ERROR_MESSAGE } from './constants';
import { isOpeningParenthesis, isClosingParenthesis,  } from './identify';


export const parse = (tokens: Token[]): AST => {
  const firstToken: Token = popTop(tokens);
  const secondToken: Token = popTop(tokens);
  const hasInitialSyntaxError: boolean = !isOpeningParenthesis(firstToken.value.toString()) || secondToken.type !== TOKEN_TYPE.KEYWORD; 

  if (hasInitialSyntaxError) {
    throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
  }

  const expression: AST = {
    type: AST_TOKEN_TYPE.CALL_EXPRESSION,
    name: secondToken.value.toString(),
    arguments: []
  };

  while (!isClosingParenthesis(peekTop(tokens).value.toString())) {
    if (isOpeningParenthesis(peekTop(tokens).value.toString())) {
      expression.arguments.push(parse(tokens));
      continue;
    } 
    const token: Token = popTop(tokens);

    if (token.type === TOKEN_TYPE.STRING) {
      expression.arguments.push({
        type: AST_TOKEN_TYPE.STRING,
        value: token.value
      })
    }

    if (token.type === TOKEN_TYPE.NUMBER) {
      expression.arguments.push({
        type: AST_TOKEN_TYPE.NUMBER,
        value: token.value
      })
    }
  }

  popTop(tokens);

  return expression;
}
