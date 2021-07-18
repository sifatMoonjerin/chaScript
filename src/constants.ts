export const SET = 'set';
export const IF = 'if';
export const LOOP = 'loop';

export const TOKEN_TYPE = {
  PARENTHESIS: 'Parenthesis',
  NUMBER: 'Number',
  KEYWORD: 'Keyword',
  STRING: 'String'
}

export const AST_TOKEN_TYPE = {
  NUMBER: 'NumericLiteral',
  STRING: 'StringLiteral',
  IDENTIFIER: 'Identifier',
  CALL_EXPRESSION: 'CallExpression',
  VARIABLE_DECLARATION: 'VariableDeclaration'
}

export const ERROR_MESSAGE = {
  INVALID_SYNTAX: 'Invalid syntax',
  INVALID_IDENTIFIER: 'Invalid identifier:',
  INVALID_EXPRESSION: 'Invalid function expression:',
  INVALID_VARIABLE: 'Variable name is not valid',
  IS_NOT_VALID: 'is not valid',
  MISSING_AT_POSITION: 'missing at position',
  UNBALANCED_PARENTHESES: 'unbalanced parentheses',
  ONLY_NUMBER_ARGUMENTS: 'only expects numbers as arguments!',
  ONLY_STRING_ARGUMENTS: 'only expects strings as arguments!',
  UNEXPECTED_ARGUMENTS: 'Expected number of arguments. Received:'
}