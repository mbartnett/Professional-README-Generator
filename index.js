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
        message: "Provide a short description explaining the what, why, and how of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n\n```md\n![alt text](assets/images/screenshot.png)\n```",
    },
    {
        type: "input",
        name: "Credits",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    {
        type: "list",
        name: "License",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.",
        choices: ["MIT", "Apache 2.0", "None"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
        type: "input",
        name: "QuestionsGitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "QuestionsEmail",
        message: "What is your email address",
    },
];

function init(){
    inquirer.prompt(questions).then(response =>{
        console.log(response)
        fs.writeFileSync('./output/README.md', generateMarkdown(response))
    })
}

init()