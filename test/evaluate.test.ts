import { AST } from './../src/types';
import { evaluate } from './../src/evaluate';
import { AST_TOKEN_TYPE, ERROR_MESSAGE, TOKEN_TYPE } from './../src/constants';

describe(evaluate, () => {
  it('should be able to evaluate a single call expression add', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(6);
  })

  it('should be able to evaluate a single call expression subtract', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'subtract',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(-2);
  })

  it('should be able to evaluate a single call expression multiply', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'multiply',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(8);
  })

  it('should be able to evaluate a single call expression divide', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'divide',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(0.5);
  })

  it('should be able to evaluate a single call expression remainder', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'remainder',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(2);
  })

  it('should be able to evaluate a nested expression', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 },
        {
          type: AST_TOKEN_TYPE.CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: TOKEN_TYPE.NUMBER, value: 3 },
            { type: TOKEN_TYPE.NUMBER, value: 2 }
          ]
        }
      ]
    }

    const output = evaluate(ast);

    expect(output).toBe(7);
  })

  it('should be able to evaluate a variable declaration', () => {
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
          name: 'display',
          arguments: [
            { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'x' }
          ],
        }
      ]
    };

    console.log = jest.fn();
    evaluate(ast);

    expect(console.log).toHaveBeenCalledWith(2);
  })

  it('should be able to log a value', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'display',
      arguments: [
        {
          type: AST_TOKEN_TYPE.CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: TOKEN_TYPE.NUMBER, value: 3 },
            { type: TOKEN_TYPE.NUMBER, value: 2 }
          ]
        }
      ]
    }

    console.log = jest.fn();
    evaluate(ast);

    expect(console.log).toHaveBeenCalledWith(1);
  })

  it('should be able to log identifier PI', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'display',
      arguments: [
        { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'PI' }
      ]
    }

    console.log = jest.fn();
    evaluate(ast);

    expect(console.log).toHaveBeenCalledWith(Math.PI);
  })

  it('should be able to log identifier TRUE', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'display',
      arguments: [
        { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'TRUE' }
      ]
    }

    console.log = jest.fn();
    evaluate(ast);

    expect(console.log).toHaveBeenCalledWith(true);
  })

  it('should be able to log identifier FALSE', () => {
    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'display',
      arguments: [
        { type: AST_TOKEN_TYPE.IDENTIFIER, value: 'FALSE' }
      ]
    }

    console.log = jest.fn();
    evaluate(ast);

    expect(console.log).toHaveBeenCalledWith(false);
  })

  it('should throw an error for unknown function call', () => {
    const functionName = 'aaaaa';

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: functionName,
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: TOKEN_TYPE.NUMBER, value: 4 }
      ]
    }

    expect(() => evaluate(ast)).toThrowError(`${ERROR_MESSAGE.INVALID_EXPRESSION} ${functionName}`);
  })

  it('should throw an error for unknown identifier', () => {
    const identifier = 'aaaaa';

    const ast: AST = {
      type: AST_TOKEN_TYPE.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: TOKEN_TYPE.NUMBER, value: 2 },
        { type: AST_TOKEN_TYPE.IDENTIFIER, value: identifier }
      ]
    }

    expect(() => evaluate(ast)).toThrowError(`${ERROR_MESSAGE.INVALID_IDENTIFIER} ${identifier}`);
  })
})