const LETTER = /[a-zA-Z]/;
const NUMBER = /^[0-9]+$/;
const OPERATOR = ['+', '-', '*', '/', '%'];
const WHITESPACE = /\s+/;


export const isLetter = (character: string): boolean => !!character && LETTER.test(character);

export const isNumber = (character: string): boolean => !!character && NUMBER.test(character);

export const isOperator = (character: string): boolean => !!character && OPERATOR.includes(character);

export const isWhiteSpace = (character: string): boolean => WHITESPACE.test(character);

export const isOpeningParenthesis = (character: string): boolean => !!character && character === '(';

export const isClosingParenthesis = (character: string): boolean => !!character && character === ')';

export const isParenthesis = (character: string): boolean => {
  return isOpeningParenthesis(character) || isClosingParenthesis(character);
}

export const isQuote = (character: string): boolean => character === '"';

const identify = {
  isLetter,
  isNumber,
  isOperator,
  isWhiteSpace,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote
}

export default identify;