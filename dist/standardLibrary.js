"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var constants_1 = require("./constants");
var standardLibraryHelper_1 = require("./standardLibraryHelper");
var add = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a + b; }, 'add');
var subtract = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a - b; }, 'subtract');
var multiply = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a * b; }, 'multiply');
var divide = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a / b; }, 'divide');
var remainder = standardLibraryHelper_1.reduceWrapper(function (a, b) { return a % b; }, 'remainder');
var display = function () {
    var statement = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        statement[_i] = arguments[_i];
    }
    if (statement.length !== 1) {
        throw new Error(constants_1.ERROR_MESSAGE.UNEXPECTED_ARGUMENTS_PRINT + " " + statement.length);
    }
    console.log(statement[0]);
    return;
};
var PI = Math.PI;
var TRUE = true;
var FALSE = false;
exports.environment = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide,
    'remainder': remainder,
    'display': display,
    'PI': PI,
    'TRUE': TRUE,
    'FALSE': FALSE
};
