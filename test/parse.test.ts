import { parse } from "../src/parse";
import { Token, AST } from './../src/types';
import { AST_TOKEN_TYPE, TOKEN_TYPE } from './../src/constants';

describe(parse, () => {
  it (`should return an AST for a non-nested data structure`, () => {
    const tokens: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS , value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'add' },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.NUMBER, value: 3 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_TOKEN_TYPE.NUMBER, value: 2 },
        { type: AST_TOKEN_TYPE.NUMBER, value: 3 },
      ],
    };

    expect(parse(tokens)).toEqual(ast);
  })

  it (`should return an AST for a nested data structure`, () => {
    const tokens: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'add' },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.NUMBER, value: 3 },
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'subtract' },
      { type: TOKEN_TYPE.NUMBER, value: 4 },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_TOKEN_TYPE.NUMBER, value: 2 },
        { type: AST_TOKEN_TYPE.NUMBER, value: 3 },
        {
          type: AST_TOKEN_TYPE.CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: AST_TOKEN_TYPE.NUMBER, value: 4 },
            { type: AST_TOKEN_TYPE.NUMBER, value: 2 },
          ],
        },
      ],
    };

    expect(parse(tokens)).toEqual(ast);
  })
})