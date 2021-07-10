import { Token } from './../src/types';
import { popTop, peekTop } from '../src/utility';
import { TOKEN_TYPE, ERROR_MESSAGE } from './../src/constants';

describe('Utility functions', () => {
  it('should return the value of the first element in the array', () => {
    const array: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
    ];
    const length = array.length;
    const output = { type: TOKEN_TYPE.PARENTHESIS, value: '(' };

    expect(peekTop(array)).toEqual(output);
    expect(array.length).toBe(length);
  })

  it('should return the the first element in the array and remove it from the array', () => {
    const array: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
    ];
    const length = array.length;
    const output = { type: TOKEN_TYPE.PARENTHESIS, value: '(' };

    expect(popTop(array)).toEqual(output);
    expect(array.length).toBe(length - 1);
  })

  it('should throw an error for empty array', () => {
    const array: Token[] = [];

    const error = `${ERROR_MESSAGE.INVALID_SYNTAX}`;

    expect(() => peekTop(array)).toThrow(error);
    expect(() => popTop(array)).toThrow(error);
  })
})