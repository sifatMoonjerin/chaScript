"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = void 0;
var constants_1 = require("./constants");
var identify_1 = require("./identify");
var checkIfCorrectlyParenthesized = function (input) {
    var length = input.length;
    if (length > 0) {
        if (!identify_1.isOpeningParenthesis(input[0])) {
            throw new Error("( " + constants_1.ERROR_MESSAGE.MISSING_AT_POSITION + " 0");
        }
        if (!identify_1.isClosingParenthesis(input[length - 1])) {
            throw new Error(") " + constants_1.ERROR_MESSAGE.MISSING_AT_POSITION + " " + (length - 1));
        }
    }
    var parentheses = [];
    var cursor = 0;
    while (cursor < length) {
        var character = input[cursor];
        if (identify_1.isOpeningParenthesis(character)) {
            parentheses.push(character);
        }
        if (identify_1.isClosingParenthesis(character)) {
            if (parentheses.pop() !== '(') {
                throw new Error(constants_1.ERROR_MESSAGE.UNBALANCED_PARENTHESES);
            }
        }
        cursor++;
    }
    if (parentheses.length > 0) {
        throw new Error(constants_1.ERROR_MESSAGE.UNBALANCED_PARENTHESES);
    }
};
var tokenize = function (input) {
    input = input.trim();
    var tokens = [];
    var cursor = 0;
    checkIfCorrectlyParenthesized(input);
    while (cursor < input.length) {
        var character = input[cursor];
        if (identify_1.isNumber(character)) {
            var numberArray = [character];
            while (identify_1.isNumber(input[++cursor])) {
                numberArray.push(input[cursor]);
            }
            if (input[cursor] === undefined) {
                throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
            }
            tokens.push({
                type: constants_1.TOKEN_TYPE.NUMBER,
                value: parseInt(numberArray.join(''), 10)
            });
            continue;
        }
        if (identify_1.isLetter(character)) {
            var characterArray = [character];
            while (identify_1.isLetter(input[++cursor])) {
                characterArray.push(input[cursor]);
            }
            if (input[cursor] === undefined) {
                throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
            }
            tokens.push({
                type: constants_1.TOKEN_TYPE.KEYWORD,
                value: characterArray.join('')
            });
            continue;
        }
        if (identify_1.isQuote(character)) {
            var characterArray = [];
            while (!identify_1.isQuote(input[++cursor])) {
                if (input[cursor] === undefined) {
                    throw new Error("\" " + constants_1.ERROR_MESSAGE.MISSING_AT_POSITION + " " + (cursor - 1));
                }
                characterArray.push(input[cursor]);
            }
            tokens.push({
                type: constants_1.TOKEN_TYPE.STRING,
                value: characterArray.join('')
            });
            cursor++;
            continue;
        }
        if (identify_1.isOpeningParenthesis(character)) {
            tokens.push({
                type: constants_1.TOKEN_TYPE.PARENTHESIS,
                value: character
            });
            cursor++;
            continue;
        }
        if (identify_1.isClosingParenthesis(character)) {
            tokens.push({
                type: constants_1.TOKEN_TYPE.PARENTHESIS,
                value: character
            });
            cursor++;
            continue;
        }
        if (identify_1.isWhiteSpace(character)) {
            cursor++;
            continue;
        }
        throw new Error(character + " " + constants_1.ERROR_MESSAGE.IS_NOT_VALID);
    }
    return tokens;
};
exports.tokenize = tokenize;
