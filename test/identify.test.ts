import { isClosingParentheses, isLetter, isNumber, isOpeningParentheses, isOperator, isParentheses, isQuote, isWhiteSpace } from "../src/identify";

describe(isLetter, () => {
  it('should return true for any lowercase letter-e.g., a', () => {
    const character: string = 'a';

    expect(isLetter(character)).toBe(true);
  })

  it('should return true for any uppercase letter-e.g., Z', () => {
    const character: string = 'Z';

    expect(isLetter(character)).toBe(true);
  })

  it('should return false for anything but a letter-e.g., 4', () => {
    const character: string = '4';

    expect(isLetter(character)).toBe(false);
  })
})

describe(isNumber, () => {
  it('should return true for any number-e.g., 40', () => {
    const character: string = '40';

    expect(isNumber(character)).toBe(true);
  })

  it('should return false for anything but a number-e.g., Z', () => {
    const character: string = 'Z';

    expect(isNumber(character)).toBe(false);
  })
})

describe(isOperator, () => {
  it('should return true for any operator-e.g., +', () => {
    const character: string = '+';

    expect(isOperator(character)).toBe(true);
  })

  it('should return false for anything but an operator-e.g., Z', () => {
    const character: string = 'Z';

    expect(isOperator(character)).toBe(false);
  })
})

describe(isWhiteSpace, () => {
  it('should return true for any operator-e.g., " "', () => {
    const character: string = ' ';

    expect(isWhiteSpace(character)).toBe(true);
  })

  it('should return false for anything but a whitespace-e.g., Z', () => {
    const character: string = 'Z';

    expect(isWhiteSpace(character)).toBe(false);
  })
})

describe(isOpeningParentheses, () => {
  it('should return true for (', () => {
    const character: string = '(';

    expect(isOpeningParentheses(character)).toBe(true);
  })

  it('should return false for anything but (', () => {
    const character: string = ')';

    expect(isOpeningParentheses(character)).toBe(false);
  })
})

describe(isClosingParentheses, () => {
  it('should return true for )', () => {
    const character: string = ')';

    expect(isClosingParentheses(character)).toBe(true);
  })

  it('should return false for anything but )', () => {
    const character: string = '(';

    expect(isClosingParentheses(character)).toBe(false);
  })
})

describe(isParentheses, () => {
  it('should return true for ( or )', () => {
    const character: string = '(';

    expect(isParentheses(character)).toBe(true);
  })

  it('should return false for anything but ( or )', () => {
    const character: string = 'z';

    expect(isParentheses(character)).toBe(false);
  })
})

describe(isQuote, () => {
  it('should return true for "', () => {
    const character: string = '"';

    expect(isQuote(character)).toBe(true);
  })

  it('should return false for anything but "', () => {
    const character: string = 'z';

    expect(isQuote(character)).toBe(false);
  })
})
