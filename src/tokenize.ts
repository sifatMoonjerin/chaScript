import { isWhiteSpace, isNumber, isLetter, isQuote, isOpeningParenthesis, isClosingParenthesis } from './identify';
import { ERROR_MESSAGE, TOKEN_TYPE } from './constants';
import { Token } from './types';

const isCorrectlyParenthesized = (input: string): void => {
  const length = input.length;

  if (length > 0) {
    if (!isOpeningParenthesis(input[0])) {
      throw new Error(`( ${ERROR_MESSAGE.MISSING_AT_POSITION} 0`);
    }

    if (!isClosingParenthesis(input[length - 1])) {
      throw new Error(`) ${ERROR_MESSAGE.MISSING_AT_POSITION} ${length - 1}`);
    }
  }

  const parentheses : string[] = [];
  let cursor = 0;

  while (cursor < length) {
    const character = input[cursor];

    if (isOpeningParenthesis(character)) {
      parentheses.push(character);
    }

    if (isClosingParenthesis(character)) {
      if (parentheses.pop() !== '(') {
        throw new Error(ERROR_MESSAGE.UNBALANCED_PARENTHESES);
      }
    }

    cursor++;
  }

  if (parentheses.length > 0) {
    throw new Error(ERROR_MESSAGE.UNBALANCED_PARENTHESES);
  }
}

export const tokenize = (input: string): Token[] => {
  input = input.trim();
  const tokens: Token[] = [];
  let cursor = 0;

  isCorrectlyParenthesized(input);

  while (cursor < input.length) {
    const character = input[cursor];

    if (isNumber(character)) {
      let number = character;
      
      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      if (input[cursor] === undefined) {
        throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
      }
      
      tokens.push({
        type: TOKEN_TYPE.NUMBER,
        value: +number
      });
      
      continue;
    }

    if (isLetter(character)) {
      let keyword = character;
      
      while (isLetter(input[++cursor])) {
        keyword += input[cursor];
      }

      if (input[cursor] === undefined) {
        throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
      }

      tokens.push({
        type: TOKEN_TYPE.KEYWORD,
        value: keyword
      });

      continue;
    }

    if (isQuote(character)) {
      let string = '';

      while (!isQuote(input[++cursor])) {
        if (input[cursor] === undefined) {
          throw new Error(`" ${ERROR_MESSAGE.MISSING_AT_POSITION} ${cursor - 1}`);
        }
        string += input[cursor];
      }

      tokens.push({
        type: TOKEN_TYPE.STRING,
        value: string
      })

      cursor++;
      continue;
    }

    if (isOpeningParenthesis(character)) {
      tokens.push({
        type: TOKEN_TYPE.PARENTHESIS,
        value: character
      });

      cursor++;
      continue;
    }

    if (isClosingParenthesis(character)) {
      tokens.push({
        type: TOKEN_TYPE.PARENTHESIS,
        value: character
      });

      cursor++;
      continue;
    }

    if (isWhiteSpace(character)) {
      cursor++;
      continue;
    }

    throw new Error(`${character} ${ERROR_MESSAGE.IS_NOT_VALID}`)
  }

  return tokens;
}
