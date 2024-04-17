#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold `\n \t Welcome To Word-Counter \n`);

const answers: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word: "
        }
    ]
);

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);



