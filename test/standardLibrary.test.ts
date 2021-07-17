import { environment } from './../src/standardLibrary';
import { ERROR_MESSAGE } from './../src/constants';
import { DisplayStatement } from '../src/types';

describe('Standard Library Test Suite', () => {
  it(`environment.add function should be able to return sum of number arguments`, () => {
    const fn = environment.add;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(15);
  })

  it(`environment.add function should throw type error for non-number arguments`, () => {
    const fn = environment.add;
    const error = `add ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3' as any, 4, 5)).toThrowError(error);
  })

  it(`environment.subtract function should be able to return sum of number arguments`, () => {
    const fn = environment.subtract;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(-13);
  })

  it(`environment.subtract function should throw type error for non-number arguments`, () => {
    const fn = environment.subtract;
    const error = `subtract ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3' as any, 4, 5)).toThrowError(error);
  })

  it(`environment.multiply function should be able to return sum of number arguments`, () => {
    const fn = environment.multiply;
    const result = fn(1, 2, 3, 4, 5);
    
    expect(result).toBe(120);
  })

  it(`environment.multiply function should throw type error for non-number arguments`, () => {
    const fn = environment.multiply;
    const error = `multiply ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(1, 2, '3' as any, 4, 5)).toThrowError(error);
  })

  it(`environment.divide function should be able to return sum of number arguments`, () => {
    const fn = environment.divide;
    const result = fn(200, 40, 2);
    
    expect(result).toBe(2.5);
  })

  it(`environment.divide function should throw type error for non-number arguments`, () => {
    const fn = environment.divide;
    const error = `divide ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '40' as any, 2)).toThrowError(error);
  })

  it(`environment.remainder function should be able to return sum of number arguments`, () => {
    const fn = environment.remainder;
    const result = fn(200, 45, 6);
    
    expect(result).toBe(2);
  })

  it(`environment.remainder function should throw type error for non-number arguments`, () => {
    const fn = environment.remainder;
    const error = `remainder ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`;
    
    expect(() => fn(200, '45' as any, 6)).toThrowError(error);
  })

  it(`environment.display function should log its argument`, () => {
    console.log = jest.fn();
    const statement: DisplayStatement = 'hello chaScript!';
    environment.display(statement);

    expect(console.log).toHaveBeenCalledWith(statement);
  })

  it(`environment.display function should throw error if the number of arguments is not one`, () => {
    expect(() => environment.display(1, 2, 3)).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 3`);
    expect(() => environment.display()).toThrowError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} 0`);
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