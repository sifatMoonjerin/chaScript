import { environment } from './../src/standardLibrary';
import { ERROR_MESSAGE } from './../src/constants';
import { ValueType } from '../src/types';

describe('Standard Library Test Suite', () => {
  it(`environment.add function should be able to return sum of number arguments`, () => {
    const fn = environment.add;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(15);
  })

  it(`environment.add function should throw type error for non-number arguments`, () => {
    const fn = environment.add;
    const error = `add ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3', 4, 5)).toThrowError(error);
  })

  it(`environment.subtract function should be able to return sum of number arguments`, () => {
    const fn = environment.subtract;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(-13);
  })

  it(`environment.subtract function should throw type error for non-number arguments`, () => {
    const fn = environment.subtract;
    const error = `subtract ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3', 4, 5)).toThrowError(error);
  })

  it(`environment.multiply function should be able to return sum of number arguments`, () => {
    const fn = environment.multiply;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(120);
  })

  it(`environment.multiply function should throw type error for non-number arguments`, () => {
    const fn = environment.multiply;
    const error = `multiply ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3', 4, 5)).toThrowError(error);
  })

  it(`environment.divide function should be able to return sum of number arguments`, () => {
    const fn = environment.divide;
    const result = fn(200, 40, 2);
    
    expect(result).toBe(2.5);
  })

  it(`environment.divide function should throw type error for non-number arguments`, () => {
    const fn = environment.divide;
    const error = `divide ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '40', 2)).toThrowError(error);
  })

  it(`environment.remainder function should be able to return sum of number arguments`, () => {
    const fn = environment.remainder;
    const result = fn(200, 45, 6);
    
    expect(result).toBe(2);
  })

  it(`environment.remainder function should throw type error for non-number arguments`, () => {
    const fn = environment.remainder;
    const error = `remainder ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '45', 6)).toThrowError(error);
  })

  it(`environment.max function should be able to return the largest number from number arguments`, () => {
    const fn = environment.max;
    const result = fn(200, 45, 6);
    
    expect(result).toBe(200);
  })

  it(`environment.max function should throw type error for non-number arguments`, () => {
    const fn = environment.max;
    const error = `max ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '45', 6)).toThrowError(error);
  })

  it(`environment.min function should be able to return the smallest number from number arguments`, () => {
    const fn = environment.min;
    const result = fn(200, 45, 6);
    
    expect(result).toBe(6);
  })

  it(`environment.min function should throw type error for non-number arguments`, () => {
    const fn = environment.min;
    const error = `min ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '45', 6)).toThrowError(error);
  })

  it(`environment.concat function should be able to return a concatenated string`, () => {
    const fn = environment.concat;
    const result = fn('hello', ' ', 'world');
    
    expect(result).toBe('hello world');
  })

  it(`environment.concat function should throw type error for non-string arguments`, () => {
    const fn = environment.concat;
    const error = `concat ${ERROR_MESSAGE.ONLY_STRING_ARGUMENTS}`;
    
    expect(() => fn('hello', 'world', 1)).toThrowError(error);
  })

  it(`environment.display function should log its argument`, () => {
    console.log = jest.fn();
    const statement: ValueType = 'hello chaScript!';
    environment.display(statement);

    expect(console.log).toHaveBeenCalledWith(statement);
  })

  it(`environment.display function should throw error if the number of arguments is not one`, () => {
    expect(() => environment.display(1, 2, 3)).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 3`);
    expect(() => environment.display()).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 0`);
  })

  it(`environment.toNumber function should convert a single input to a number`, () => {
    const result = environment.toNumber('145');

    expect(result).toBe(145);
  })

  it(`environment.toNumber function should throw error if it can not convert the input to number`, () => {
    expect(() => environment.toNumber(undefined)).toThrowError(`undefined ${ERROR_MESSAGE.IS_NOT_VALID}`);
  })

  it(`environment.toNumber function should throw error if the number of arguments is not one`, () => {
    expect(() => environment.toNumber('1', '2', '3')).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 3`);
    expect(() => environment.toNumber()).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 0`);
  })

  it(`environment.toString function should convert a single input to a string`, () => {
    const result = environment.toString(145);

    expect(result).toBe('145');
  })

  it(`environment.toString function should throw error if the number of arguments is not one`, () => {
    expect(() => environment.toString(1, 2, 3)).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 3`);
    expect(() => environment.toString()).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 0`);
  })
  
  it(`environment.PI should return Math.PI`, () => {
    expect(environment.PI).toBe(Math.PI);
  })

  it(`environment.TRUE should return true`, () => {
    expect(environment.TRUE).toBe(true);
  })

  it(`environment.FALSE should return false`, () => {
    expect(environment.FALSE).toBe(false);
  })

})