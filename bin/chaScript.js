#!/usr/bin/env node

const chalk = require('chalk');
const { repl } = require('../dist/repl.js');
const { parseAndEvaluate } = require('../dist');

const fs = require('fs');

const [command, ...args] = process.argv.slice(2);

if (!command) {
  return repl();
}

if (command.toLowerCase() === 'run') {
  const extension = args[0].split('.').pop();
  if (extension === 'chaScript') {
    fs.readFile(args[0], 'utf-8', (error, file) => {
      if (error) {
        console.log(`${chalk.red(error.name)}: ${error.message}`);
      }
      try {
        parseAndEvaluate(file);
      } catch (err) {
        console.log(`${chalk.red(err.name + ':')} ${err.message}`);
      }
    });
  } else {
    console.error('Invalid file!');
  }
}