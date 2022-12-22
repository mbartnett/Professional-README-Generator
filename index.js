// Node.js `requires`

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// Array of README question prompts

const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is your full name?",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Username",
        message: "What is your GitHub username?",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title of your application?",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a short description for your application.",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your application?",
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions for use of your application.",
        prefix: '\x1b[35m',
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your applicaiton.",
        choices: ["MIT", "Apache 2.0", "None"],
        prefix: '\x1b[35m',
    },
    {
        type: "input",
        name: "Contributing",
        message: "Provide guidelines for how to contribute to your application.",
        prefix: "\x1b[35m",
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide examples of how to write tests for your application.",
        prefix: '\x1b[35m',
    },
];

// Function that initalizes the questions, logs the answers, and generates the README.md file

function init(){
    inquirer.prompt(questions).then(response =>{
        console.log('\x1b[37m%s\x1b[0m', response)
        fs.writeFile('./output/README.md', generateMarkdown(response), (err) => {
            if (err) throw err;
            console.log('\x1b[1m\x1b[32m%s\x1b[0m', "Your README.md file has been created successfully.");
        })
    })
}

init()