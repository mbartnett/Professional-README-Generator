// Node.js `requires`

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// Array of README question prompts

const questions = [
    // {
    //     type: "input",
    //     name: "Name",
    //     message: "What is your full name?",
    // },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "Username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "Title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a short description for your application.",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your application?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions for use of your application.",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your applicaiton.",
        choices: ["MIT", "Apache 2.0", "None"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Provide guidelines for how to contribute to your application."
    },
    {
        type: "input",
        name: "Tests",
        message: "Provide examples of how to write tests for your application.",
    },
];

// Function that initalizes the questions and logs the answers

function init(){
    inquirer.prompt(questions).then(response =>{
        console.log(response)
        fs.writeFileSync('./output/README.md', generateMarkdown(response))
    })
}

init()