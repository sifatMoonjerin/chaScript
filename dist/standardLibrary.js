"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var constants_1 = require("./constants");
var standardLibraryHelper_1 = require("./standardLibraryHelper");
//#region Math operations
var add = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a + b; }, 'add');
var subtract = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a - b; }, 'subtract');
var multiply = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a * b; }, 'multiply');
var divide = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a / b; }, 'divide');
var remainder = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a % b; }, 'remainder');
var max = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, standardLibraryHelper_1.numberFilter(args, 'max'));
};
var min = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.min.apply(Math, standardLibraryHelper_1.numberFilter(args, 'min'));
};
//#endregion
//#region String operations
var concat = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return standardLibraryHelper_1.stringFilter(args, 'concat').join('');
};
//#endregion
//#region General operations
var display = function () {
    var statement = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        statement[_i] = arguments[_i];
    }
    standardLibraryHelper_1.checkValidNumberOfArguments(statement, 1);
    console.log(statement[0]);
    return;
};
var toNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standardLibraryHelper_1.checkValidNumberOfArguments(args, 1);
    var convertedValue = Number(args[0]);
    if (isNaN(convertedValue))
        throw new TypeError(args[0] + " " + constants_1.ERROR_MESSAGE.IS_NOT_VALID);
    return convertedValue;
};
var toString = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standardLibraryHelper_1.checkValidNumberOfArguments(args, 1);
    return "" + args[0];
};
//#endregion
//#region Identifiers
var PI = Math.PI;
var TRUE = true;
var FALSE = false;
//#endregion
exports.environment = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    remainder: remainder,
    max: max,
    min: min,
    concat: concat,
    display: display,
    toNumber: toNumber,
    toString: toString,
    PI: PI,
    TRUE: TRUE,
    FALSE: FALSE
};
