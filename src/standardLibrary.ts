import { ValueType, Environment } from './types';
import { ERROR_MESSAGE } from './constants';
import { reduceWrapper, numberFilter, stringFilter, checkValidNumberOfArguments, numberAndBooleanFilter } from './standardLibraryHelper';

//#region General operations

const _void = (...args: ValueType[]) => undefined;

const display = (...statement: ValueType[]): undefined => {
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

const eq = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberAndBooleanFilter(args, 'eq');
  return num1 === num2;
}

const neq = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberAndBooleanFilter(args, 'neq');
  return num1 !== num2;
}

const gt = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberFilter(args, 'gt');
  return num1 > num2;
}

const gte = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberFilter(args, 'gte');
  return num1 >= num2;
}

const lt = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberFilter(args, 'lt');
  return num1 < num2;
}

const lte = (...args: ValueType[]): boolean => {
  checkValidNumberOfArguments(args, 2);
  const [num1, num2] = numberFilter(args, 'lte');
  return num1 <= num2;
}

//#endregion

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

//#region Identifiers

const PI = Math.PI;

const TRUE = true;

const FALSE = false;

//#endregion

export const environment: Environment = {
  void: _void,
  display,
  toNumber,
  toString,
  eq,
  neq,
  gt,
  gte,
  lt,
  lte,
  add,
  subtract,
  multiply,
  divide,
  remainder,
  max,
  min,
  concat,
  PI,
  TRUE,
  FALSE
}