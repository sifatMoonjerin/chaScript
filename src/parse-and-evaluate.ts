import { pipe } from './utility';
import { tokenize } from './tokenize';
import { parse } from './parse';
import { evaluate } from './evaluate';

export const parseAndEvaluate = pipe(
  tokenize,
  parse,
  evaluate
)