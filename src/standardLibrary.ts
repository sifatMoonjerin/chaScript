import { DisplayStatement } from './types';
import { ERROR_MESSAGE } from './constants';
import { reduceWrapper } from './standardLibraryHelper';


const add = reduceWrapper((a: number, b: number): number => a + b, 'add');

const subtract = reduceWrapper((a: number, b: number): number => a - b, 'subtract');

const multiply = reduceWrapper((a: number, b: number): number => a * b, 'multiply');

const divide = reduceWrapper((a: number, b: number): number => a / b, 'divide');

const remainder = reduceWrapper((a: number, b: number): number => a % b, 'remainder');

const display = (...statement: DisplayStatement[]): void => {
  if (statement.length !== 1) {
    throw new Error(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT} ${statement.length}`)
  }
  console.log(statement[0]);
}

const PI = Math.PI;

const TRUE = true;

const FALSE = false;


export const environment = {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  display,
  PI,
  TRUE,
  FALSE
}