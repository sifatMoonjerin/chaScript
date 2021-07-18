"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var utility_1 = require("./utility");
var constants_1 = require("./constants");
var identify_1 = require("./identify");
var parse = function (tokens) {
    var firstToken = utility_1.popTop(tokens);
    var secondToken = utility_1.popTop(tokens);
    var hasInitialSyntaxError = !identify_1.isOpeningParenthesis(firstToken.value.toString()) || secondToken.type !== constants_1.TOKEN_TYPE.KEYWORD;
    if (hasInitialSyntaxError) {
        throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
    }
    var expression = {
        type: constants_1.AST_TOKEN_TYPE.CALL_EXPRESSION,
        name: secondToken.value.toString(),
        arguments: []
    };
    while (!identify_1.isClosingParenthesis(utility_1.peekTop(tokens).value.toString())) {
        if (identify_1.isOpeningParenthesis(utility_1.peekTop(tokens).value.toString())) {
            expression.arguments.push(exports.parse(tokens));
            continue;
        }
        var token = utility_1.popTop(tokens);
        if (token.type === constants_1.TOKEN_TYPE.KEYWORD) {
            expression.arguments.push({
                type: constants_1.AST_TOKEN_TYPE.IDENTIFIER,
                value: token.value
            });
        }
        if (token.type === constants_1.TOKEN_TYPE.STRING) {
            expression.arguments.push({
                type: constants_1.AST_TOKEN_TYPE.STRING,
                value: token.value
            });
        }
        if (token.type === constants_1.TOKEN_TYPE.NUMBER) {
            expression.arguments.push({
                type: constants_1.AST_TOKEN_TYPE.NUMBER,
                value: token.value
            });
        }
    }
    utility_1.popTop(tokens);
    return expression;
};
exports.parse = parse;
