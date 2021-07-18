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
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' }
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_TOKEN_TYPE.NUMBER, value: 2 },
        { type: AST_TOKEN_TYPE.NUMBER, value: 3 }
      ]
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
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' }
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
            { type: AST_TOKEN_TYPE.NUMBER, value: 2 }
          ],
        }
      ]
    };

    expect(parse(tokens)).toEqual(ast);
  })

  it (`should return an AST for variable declaration`, () => {
    const tokens: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS , value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'main' },
      { type: TOKEN_TYPE.PARENTHESIS , value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'set' },
      { type: TOKEN_TYPE.KEYWORD, value: 'x' },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPE.PARENTHESIS , value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'add' },
      { type: TOKEN_TYPE.KEYWORD, value: 'x' },
      { type: TOKEN_TYPE.NUMBER, value: 3 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' }
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'main',
      arguments: [
        {
          type: AST_TOKEN_TYPE.VARIABLE_DECLARATION,
          name: 'set',
          arguments: [
            { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'x' },
            { type: AST_TOKEN_TYPE.NUMBER, value: 2 }
          ],
        },
        {
          type: AST_TOKEN_TYPE.CALL_EXPRESSION,
          name: 'add',
          arguments: [
            { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'x' },
            { type: AST_TOKEN_TYPE.NUMBER, value: 3 }
          ],
        }
      ]
    };

    expect(parse(tokens)).toEqual(ast);
  })

  it (`should return an AST with StringLiteral`, () => {
    const message = 'hello from chaScript!';

    const tokens: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS , value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'print' },
      { type: TOKEN_TYPE.STRING, value: message },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' }
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'print',
      arguments: [
        { type: AST_TOKEN_TYPE.STRING, value: message }
      ]
    };

    expect(parse(tokens)).toEqual(ast);
  })

  it (`should return an AST for a nested data structure with Identifier`, () => {
    const tokens: Token[] = [
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'add' },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.NUMBER, value: 3 },
      { type: TOKEN_TYPE.KEYWORD, value: 'PI' },
      { type: TOKEN_TYPE.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPE.KEYWORD, value: 'subtract' },
      { type: TOKEN_TYPE.NUMBER, value: 4 },
      { type: TOKEN_TYPE.KEYWORD, value: 'PI' },
      { type: TOKEN_TYPE.NUMBER, value: 2 },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPE.PARENTHESIS, value: ')' }
    ];

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_TOKEN_TYPE.NUMBER, value: 2 },
        { type: AST_TOKEN_TYPE.NUMBER, value: 3 },
        { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'PI' },
        {
          type: AST_TOKEN_TYPE.CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: AST_TOKEN_TYPE.NUMBER, value: 4 },
            { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'PI' },
            { type: AST_TOKEN_TYPE.NUMBER, value: 2 }
          ],
        }
      ]
    };

    expect(parse(tokens)).toEqual(ast);
  })
})