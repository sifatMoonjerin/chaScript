"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var constants_1 = require("./constants");
var standard_library_helper_1 = require("./standard-library-helper");
//#region General operations
var _void = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return undefined;
};
var display = function () {
    var statement = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        statement[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(statement, 1);
    console.log(statement[0]);
    return;
};
var toNumber = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 1);
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
    standard_library_helper_1.checkValidNumberOfArguments(args, 1);
    return "" + args[0];
};
var eq = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    return args[0] === args[1];
};
var neq = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    return args[0] !== args[1];
};
var gt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    var _a = standard_library_helper_1.numberFilter(args, 'gt'), num1 = _a[0], num2 = _a[1];
    return num1 > num2;
};
var gte = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    var _a = standard_library_helper_1.numberFilter(args, 'gte'), num1 = _a[0], num2 = _a[1];
    return num1 >= num2;
};
var lt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    var _a = standard_library_helper_1.numberFilter(args, 'lt'), num1 = _a[0], num2 = _a[1];
    return num1 < num2;
};
var lte = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    standard_library_helper_1.checkValidNumberOfArguments(args, 2);
    var _a = standard_library_helper_1.numberFilter(args, 'lte'), num1 = _a[0], num2 = _a[1];
    return num1 <= num2;
};
//#endregion
//#region Math operations
var add = standard_library_helper_1.reduceWrapper(function (a, b) { return a + b; }, 'add');
var subtract = standard_library_helper_1.reduceWrapper(function (a, b) { return a - b; }, 'subtract');
var multiply = standard_library_helper_1.reduceWrapper(function (a, b) { return a * b; }, 'multiply');
var divide = standard_library_helper_1.reduceWrapper(function (a, b) { return a / b; }, 'divide');
var remainder = standard_library_helper_1.reduceWrapper(function (a, b) { return a % b; }, 'remainder');
var max = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, standard_library_helper_1.numberFilter(args, 'max'));
};
var min = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.min.apply(Math, standard_library_helper_1.numberFilter(args, 'min'));
};
//#endregion
//#region String operations
var concat = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return standard_library_helper_1.stringFilter(args, 'concat').join('');
};
//#endregion
//#region Identifiers
var PI = Math.PI;
var TRUE = true;
var FALSE = false;
//#endregion
exports.environment = {
    void: _void,
    display: display,
    toNumber: toNumber,
    toString: toString,
    eq: eq,
    neq: neq,
    gt: gt,
    gte: gte,
    lt: lt,
    lte: lte,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    remainder: remainder,
    max: max,
    min: min,
    concat: concat,
    PI: PI,
    TRUE: TRUE,
    FALSE: FALSE
};
