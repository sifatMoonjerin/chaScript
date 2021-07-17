"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.popTop = exports.peekTop = void 0;
var constants_1 = require("./constants");
var isEmptyArray = function (array) { return array.length === 0; };
var peekTop = function (array) {
    if (!isEmptyArray(array)) {
        return array[0];
    }
    throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
};
exports.peekTop = peekTop;
var popTop = function (array) {
    if (isEmptyArray(array)) {
        throw new Error("" + constants_1.ERROR_MESSAGE.INVALID_SYNTAX);
    }
    var token = exports.peekTop(array);
    array.shift();
    return token;
};
exports.popTop = popTop;
var pipe = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (value) {
        return funcs.reduce(function (value, func) { return func(value); }, value);
    };
};
exports.pipe = pipe;
