"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndEvaluate = void 0;
var utility_1 = require("./utility");
var tokenize_1 = require("./tokenize");
var parse_1 = require("./parse");
var evaluate_1 = require("./evaluate");
exports.parseAndEvaluate = utility_1.pipe(tokenize_1.tokenize, parse_1.parse, evaluate_1.evaluate);
