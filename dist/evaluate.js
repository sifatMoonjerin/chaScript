"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
var constants_1 = require("./constants");
var standardLibrary_1 = require("./standardLibrary");
var callFunctionExpression = function (node) {
    var name = node.name;
    var fn = standardLibrary_1.environment[name];
    if (typeof fn === 'function') {
        var args = node.arguments.map(function (arg) { return exports.evaluate(arg); });
        return fn.apply(void 0, args);
    }
    throw new ReferenceError(constants_1.ERROR_MESSAGE.INVALID_EXPRESSION + " " + name);
};
var getIdentifierValue = function (token) {
    var key = token.value;
    if (standardLibrary_1.environment.hasOwnProperty(key)) {
        return standardLibrary_1.environment[key];
    }
    else {
        throw new ReferenceError(constants_1.ERROR_MESSAGE.INVALID_IDENTIFIER + " " + key);
    }
};
var evaluate = function (node) {
    if (node.type === constants_1.AST_TOKEN_TYPE.CALL_EXPRESSION) {
        return callFunctionExpression(node);
    }
    else if ('value' in node) {
        return node.type === constants_1.AST_TOKEN_TYPE.IDENTIFIER ? getIdentifierValue(node) : node.value;
    }
    else {
        throw new SyntaxError("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
    }
};
exports.evaluate = evaluate;
