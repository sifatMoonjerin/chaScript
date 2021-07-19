"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidNumberOfArguments = exports.reduceWrapper = exports.stringFilter = exports.numberFilter = void 0;
var constants_1 = require("./constants");
var numberFilter = function (numArgs, fnName) {
    return numArgs.map(function (arg) {
        if (typeof arg === 'number')
            return arg;
        throw new TypeError(fnName + " " + constants_1.ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS);
    });
};
exports.numberFilter = numberFilter;
var stringFilter = function (strArgs, fnName) {
    return strArgs.map(function (str) {
        if (typeof str === 'string')
            return str;
        throw new TypeError(fnName + " " + constants_1.ERROR_MESSAGE.ONLY_STRING_ARGUMENTS);
    });
};
exports.stringFilter = stringFilter;
var reduceWrapper = function (fn, fnName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var numArgs = exports.numberFilter(args, fnName);
        return numArgs.reduce(fn);
    };
};
exports.reduceWrapper = reduceWrapper;
var checkValidNumberOfArguments = function (args, expectedArgs) {
    if (args.length !== expectedArgs) {
        throw new RangeError(constants_1.ERROR_MESSAGE.UNEXPECTED_ARGUMENTS + " " + args.length);
    }
};
exports.checkValidNumberOfArguments = checkValidNumberOfArguments;
