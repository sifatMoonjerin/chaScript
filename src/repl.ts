import { parseAndEvaluate } from './parse-and-evaluate';
import chalk from "chalk";
const { prompt } = require('inquirer');

process.on('SIGINT', () => {
  process.exit();
});

const promptMessages = [
  { name: 'COMMAND', type: 'input', prefix: '', message: chalk.blueBright('>') }
]

export const repl = async () => {
  try {
    const input = await prompt(promptMessages);
    const { COMMAND } = input;
    
    if (COMMAND.trim()) {
      parseAndEvaluate(COMMAND);
    }
  } catch (error) {
    console.log(`${chalk.red(error.name)}: ${error.message}`);
  }

  repl();
} 


if (require.main === module) {
  console.log(
    chalk.green(`Welcome to ${chalk.greenBright('chaScript')} world!`)
  );

  repl();
}
