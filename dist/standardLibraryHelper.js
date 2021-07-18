"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceWrapper = void 0;
var constants_1 = require("./constants");
var reduceWrapper = function (fn, fnName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var numArgs = args.map(function (arg) {
            if (typeof arg === 'number')
                return arg;
            throw new TypeError(fnName + " " + constants_1.ERROR_MESSAGE.ONLY_NUMBER_ARGUMENTS);
        });
        return numArgs.reduce(fn);
    };
};
exports.reduceWrapper = reduceWrapper;
