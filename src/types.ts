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

export type NumberOperationReturnValue = (...args: ValueType[]) => number;

export type StringOperationReturnValue = (...args: ValueType[]) => string;

export type EnvironmentMethods = {
  add: NumberOperationReturnValue;
  subtract: NumberOperationReturnValue;
  multiply: NumberOperationReturnValue;
  divide: NumberOperationReturnValue;
  remainder: NumberOperationReturnValue;
  max: NumberOperationReturnValue;
  min: NumberOperationReturnValue;
  concat: StringOperationReturnValue;
  display: (...statement: ValueType[]) => ValueType;
  toNumber: NumberOperationReturnValue;
  toString: StringOperationReturnValue;
}

export type EnvironmentConstants = {
  PI: number;
  TRUE: boolean;
  FALSE: boolean;
}

export type Environment = EnvironmentMethods & EnvironmentConstants;
