import { ERROR_MESSAGE } from './constants';
import { ReduceWrapperCallBack, NumberOperationReturnValue, ValueType } from './types';

export const numberFilter = (numArgs: ValueType[], fnName: string): number[] => {
  return numArgs.map(arg => {
    if (typeof arg === 'number') return arg;
    throw new TypeError(`${fnName} ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`);
  })
}

export const stringFilter = (strArgs: ValueType[], fnName: string): string[] => {
  return strArgs.map(str => {
    if (typeof str === 'string') return str;
    throw new TypeError(`${fnName} ${ERROR_MESSAGE.ONLY_STRING_ARGUMENTS}`);
  })
}

export const reduceWrapper = (fn: ReduceWrapperCallBack, fnName: string): NumberOperationReturnValue =>  {
  return (...args: ValueType[]): number => {
    const numArgs = numberFilter(args, fnName);
    
    return numArgs.reduce(fn);
  }
}

export const checkValidNumberOfArguments = (args: ValueType[], expectedArgs: number) => {
  if (args.length !== expectedArgs) {
    throw new RangeError(`${ERROR_MESSAGE.UNEXPECTED_ARGUMENTS} ${args.length}`);
  }
}