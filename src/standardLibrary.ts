import { ValueType, Environment } from './types';
import { ERROR_MESSAGE } from './constants';
import { reduceWrapper, numberFilter, stringFilter, checkValidNumberOfArguments } from './standardLibraryHelper';

//#region Math operations

const add = reduceWrapper((a: number, b: number): number => a + b, 'add');

const subtract = reduceWrapper((a: number, b: number): number => a - b, 'subtract');

const multiply = reduceWrapper((a: number, b: number): number => a * b, 'multiply');

const divide = reduceWrapper((a: number, b: number): number => a / b, 'divide');

const remainder = reduceWrapper((a: number, b: number): number => a % b, 'remainder');

const max = (...args: ValueType[]): number => Math.max(...numberFilter(args, 'max'));

const min = (...args: ValueType[]): number => Math.min(...numberFilter(args, 'min'));

//#endregion

//#region String operations

const concat = (...args: ValueType[]): string => stringFilter(args, 'concat').join('');

//#endregion

//#region General operations

const display = (...statement: ValueType[]): ValueType => {
  checkValidNumberOfArguments(statement, 1);
  console.log(statement[0]);
  return;
}

const toNumber = (...args: ValueType[]): number => {
  checkValidNumberOfArguments(args, 1);
  const convertedValue = Number(args[0]);

  if (isNaN(convertedValue)) throw new TypeError(`${args[0]} ${ERROR_MESSAGE.IS_NOT_VALID}`);

  return convertedValue;
}

const toString = (...args: ValueType[]): string => {
  checkValidNumberOfArguments(args, 1);
  return "" + args[0];
}

//#endregion

//#region Identifiers

const PI = Math.PI;

const TRUE = true;

const FALSE = false;

//#endregion


export const environment: Environment = {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  max,
  min,
  concat,
  display,
  toNumber,
  toString,
  PI,
  TRUE,
  FALSE
}
