const LETTER = /[a-zA-Z]/;
const NUMBER = /^[0-9]+$/;
const OPERATOR = ['+', '-', '*', '/', '%'];
const WHITESPACE = /\s+/;


export const isLetter = (character: string): boolean => LETTER.test(character);

export const isNumber = (character: string): boolean => NUMBER.test(character);

export const isOperator = (character: string): boolean => OPERATOR.includes(character);

export const isWhiteSpace = (character: string): boolean => WHITESPACE.test(character);

export const isOpeningParentheses = (character: string): boolean => character === '(';

export const isClosingParentheses = (character: string): boolean => character === ')';

export const isParentheses = (character: string): boolean => {
  return isOpeningParentheses(character) || isClosingParentheses(character);
}

export const isQuote = (character: string): boolean => character === '"';

const identify = {
  isLetter,
  isNumber,
  isOperator,
  isWhiteSpace,
  isOpeningParentheses,
  isClosingParentheses,
  isParentheses,
  isQuote
}

export default identify;