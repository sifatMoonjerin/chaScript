import { tokenize } from './../src/tokenize';
import { ERROR_MESSAGE, TOKEN_TYPE } from './../src/constants';
import { Token } from './../src/types';


describe(tokenize, () => {
  it('should return an array', () => {
    const input = '';

    expect(Array.isArray(tokenize(input))).toBe(true);
  })

  it('should return an array of tokens', () => {
    const input = '(plus 1 22 (minus 40 3))';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.KEYWORD, value: 'plus' },
      { type: TOKEN_TYPE.NUMBER, value: 1},
      { type: TOKEN_TYPE.NUMBER, value: 22},
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.KEYWORD, value: 'minus'},
      { type: TOKEN_TYPE.NUMBER, value: 40},
      { type: TOKEN_TYPE.NUMBER, value: 3},
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'},
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should be able to tokenize a single digit', () => {
    const input = '(5)';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.NUMBER, value: 5 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should be able to tokenize multiple digits', () => {
    const input = '(55 66)';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.NUMBER, value: 55 },
      { type: TOKEN_TYPE.NUMBER, value: 66 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should be able to tokenize a single letter keyword', () => {
    const input = '(a)';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.KEYWORD, value: 'a' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should be able to tokenize a keyword', () => {
    const input = '(aaaa bbbb)';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.KEYWORD, value: 'aaaa' },
      { type: TOKEN_TYPE.KEYWORD, value: 'bbbb' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should be able to tokenize a string', () => {
    const input = '("aaaa bbbb")';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '('},
      { type: TOKEN_TYPE.STRING, value: 'aaaa bbbb'},
      { type: TOKEN_TYPE.PARENTHESIS, value: ')'}
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should throw an error for missing "', () => {
    const input = '("aaaa bbbb)';
    const error = `" ${ERROR_MESSAGE.MISSING_AT_POSITION} ${input.length - 1}`;

    expect(() => tokenize(input)).toThrow(error);
  })

  it('should be able to tokenize a pair of parentheses', () => {
    const input = '()';
    const result: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  })

  it('should return an empty array for whitespace', () => {
    const input = '      ';
    const result: Token[] = [];

    expect(tokenize(input)).toEqual(result);
  })

  it('should throw an error for unbalanced parentheses', () => {
    const input1 = '(( )))';
    const input2 = '((( ))';
    const error = ERROR_MESSAGE.UNBALANCED_PARENTHESES;

    expect(() => tokenize(input1)).toThrow(error);
    expect(() => tokenize(input2)).toThrow(error);
  })

  it('should throw an error for missing )', () => {
    const input1 = '(aaa';
    const input2 = '(222';
    const error = ERROR_MESSAGE.INVALID_SYNTAX;

    expect(() => tokenize(input1)).toThrow(error);
    expect(() => tokenize(input2)).toThrow(error);
  })

  it('should throw an error for invalid character', () => {
    const input = '($)';
    const error = `$ ${ERROR_MESSAGE.IS_NOT_VALID}`;

    expect(() => tokenize(input)).toThrow(error);
  })
})