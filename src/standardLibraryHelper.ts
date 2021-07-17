import { ERROR_MESSAGE } from './constants';
import { ReduceWrapperCallBack, ReduceWrapperReturnValue } from './types';

const hasOnlyNumbersAsArguments = (args: number[]): boolean => args.every(arg => typeof arg === 'number');

export const reduceWrapper = (fn: ReduceWrapperCallBack, fnName: string): ReduceWrapperReturnValue =>  {
  return (...args: number[]): number => {
    if (!hasOnlyNumbersAsArguments(args)) {
      throw new TypeError(`${fnName} ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`);
    }

    return args.reduce(fn);
  }
}