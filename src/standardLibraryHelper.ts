import { ERROR_MESSAGE } from './constants';
import { ReduceWrapperCallBack, ReduceWrapperReturnValue, ValueType } from './types';

export const reduceWrapper = (fn: ReduceWrapperCallBack, fnName: string): ReduceWrapperReturnValue =>  {
  return (...args: ValueType[]): number => {
    const numArgs = args.map(arg => {
      if (typeof arg === 'number') return arg;
      throw new TypeError(`${fnName} ${ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS}`);
    })
    
    return numArgs.reduce(fn);
  }
}