import { parse } from './parse';
import { Token } from './types';
import { ERROR_MESSAGE } from './constants';


const isEmptyArray = (array: any[]): boolean => array.length === 0;

export const peekTop = (array: Token[]): Token => {
  if (!isEmptyArray(array)) {
    return array[0];
  }
  
  throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);
}

export const popTop = (array: Token[]): Token => {
  if (isEmptyArray(array)) {
    throw new Error(`${ERROR_MESSAGE.INVALID_SYNTAX}`);  
  }

  const token = peekTop(array);
  array.shift();

  return token;
}

export const pipe = (...funcs: any[]) => (value: any) => {
  return funcs.reduce((value, func) => func(value), value)
} 

