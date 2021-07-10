export type Token = {
  type: string;
  value: string | number;
}

export type AST = {
  type: string;
  name: string;
  arguments: (Token | AST) [];
}