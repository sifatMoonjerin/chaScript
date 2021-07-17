export type Token = {
  type: string;
  value: string | number;
}

export type AST = {
  type: string;
  name: string;
  arguments: (Token | AST) [];
}

export type DisplayStatement = string | number | boolean;

export type ReduceWrapperCallBack = (a: number, b: number) => number;

export type ReduceWrapperReturnValue = (...args: number[]) => number;