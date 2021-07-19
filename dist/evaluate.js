"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
var constants_1 = require("./constants");
var standard_library_1 = require("./standard-library");
var variables = {};
var specialFunctionArgumentCheck = function (args) {
    if (args.length !== 2) {
        throw new RangeError(constants_1.ERROR_MESSAGE.UNEXPECTED_ARGUMENTS + " " + args.length);
    }
};
var callFunctionExpression = function (node) {
    var name = node.name;
    if (standard_library_1.environment.hasOwnProperty(name)) {
        var fn = standard_library_1.environment[name];
        if (typeof fn === 'function') {
            var args = node.arguments.map(function (arg) { return exports.evaluate(arg); });
            return fn.apply(void 0, args);
        }
    }
    if (name === constants_1.IF) {
        var args = node.arguments;
        specialFunctionArgumentCheck(args);
        return exports.evaluate(args[0]) ? exports.evaluate(args[1]) : undefined;
    }
    if (name === constants_1.LOOP) {
        var args = node.arguments;
        specialFunctionArgumentCheck(args);
        var condition = args[0], block = args[1];
        while (exports.evaluate(condition)) {
            exports.evaluate(block);
        }
        return;
    }
    throw new ReferenceError(constants_1.ERROR_MESSAGE.INVALID_EXPRESSION + " " + name);
};
var defineVariable = function (node) {
    if (node.arguments.length !== 2)
        throw new RangeError(constants_1.ERROR_MESSAGE.UNEXPECTED_ARGUMENTS + " " + node.arguments.length);
    var variableName = node.arguments[0];
    var variableValue = exports.evaluate(node.arguments[1]);
    if ('value' in variableName && variableName.type === constants_1.AST_TOKEN_TYPE.IDENTIFIER) {
        if (standard_library_1.environment.hasOwnProperty(variableName.value))
            throw new ReferenceError("" + constants_1.ERROR_MESSAGE.INVALID_VARIABLE);
        variables[variableName.value] = variableValue;
    }
    else {
        throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
    }
    return;
};
var getIdentifierValue = function (token) {
    var key = token.value;
    if (standard_library_1.environment.hasOwnProperty(key)) {
        return standard_library_1.environment[key];
    }
    else if (variables.hasOwnProperty(key)) {
        return variables[key];
    }
    else {
        throw new ReferenceError(constants_1.ERROR_MESSAGE.INVALID_IDENTIFIER + " " + key);
    }
};
var evaluate = function (node) {
    if (node.type === constants_1.AST_TOKEN_TYPE.CALL_EXPRESSION) {
        return callFunctionExpression(node);
    }
    else if (node.type === constants_1.AST_TOKEN_TYPE.VARIABLE_DECLARATION) {
        return defineVariable(node);
    }
    else if ('value' in node) {
        return node.type === constants_1.AST_TOKEN_TYPE.IDENTIFIER ? getIdentifierValue(node) : node.value;
    }
    else {
        throw new SyntaxError("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
    }
};
exports.evaluate = evaluate;
