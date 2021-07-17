export type Token = {
  type: string;
  value: string | number;
}

export type AST = {
  type: string;
  name: string;
  arguments: (Token | AST) [];
}

export type ValueType = string | number | boolean | undefined;

export type ReduceWrapperCallBack = (a: number, b: number) => number;

export type ReduceWrapperReturnValue = (...args: ValueType[]) => number;

export type EnvironmentMethods = {
  add: ReduceWrapperReturnValue;
  subtract: ReduceWrapperReturnValue;
  multiply: ReduceWrapperReturnValue;
  divide: ReduceWrapperReturnValue;
  remainder: ReduceWrapperReturnValue;
  display: (...statement: ValueType[]) => ValueType;
}

export type EnvironmentConstants = {
  PI: number;
  TRUE: boolean;
  FALSE: boolean;
}

export type Environment = EnvironmentMethods & EnvironmentConstants;
