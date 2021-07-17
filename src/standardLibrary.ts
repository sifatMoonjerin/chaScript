import { ValueType, Environment } from './types';
import { ERROR_MESSAGE } from './constants';
import { reduceWrapper } from './standardLibraryHelper';


const add = reduceWrapper((a: number, b: number): number => a + b, 'add');

const subtract = reduceWrapper((a: number, b: number): number => a - b, 'subtract');

const multiply = reduceWrapper((a: number, b: number): number => a * b, 'multiply');

const divide = reduceWrapper((a: number, b: number): number => a / b, 'divide');

const remainder = reduceWrapper((a: number, b: number): number => a % b, 'remainder');

const display = (...statement: ValueType[]): ValueType => {
  if (statement.length !== 1) {
    throw new Error(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} ${statement.length}`)
  }
  console.log(statement[0]);
  return;
}

const PI = Math.PI;

const TRUE = true;

const FALSE = false;


export const environment: Environment = {
  'add': add,
  'subtract': subtract,
  'multiply': multiply,
  'divide': divide,
  'remainder': remainder,
  'display': display,
  'PI': PI,
  'TRUE': TRUE,
  'FALSE': FALSE
}
