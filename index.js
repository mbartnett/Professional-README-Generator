// Array of README prompts

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
    {
        type: "input",
        name: "Username",
        message: "GitHub Username: ",
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
        type: "input",
        name: "Tests",
        message: "What commands are needed to test this app?",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email address.",
    },
    {
        type: "input",
        name: "Contributors",
        message: "List any contributors",
    },
    {
        type: "list",
        name: "License",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.",
        choices: ["MIT", "Apache 2.0", "None"],
    },
];

function init(){
    inquirer.prompt(questions).then(response =>{
        console.log(response)
        fs.writeFileSync('./output/README.md', generateMarkdown(response))
    })
}

init()