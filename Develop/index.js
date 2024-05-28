// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Write down the title of the project",
        name: "title"
    },
    {
        type: "input",
        message: "Write down the description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Write down the installation instructions of the project",
        name: "installation"
    },
    {
        type: "input",
        message: "Write down the usage information of the project",
        name: "usage"
    },
    {
        type: "input",
        message: "Write down the contribution guidelines of the project",
        name: "guidelines"
    },
    {
        type: "input",
        message: "Write down the test instructions of the project",
        name: "test"
    },
    {
        type: "list",
        message: "Choose your license",
        name: "license",
        choices: ["MIT License", "Boost Software License", "Creative Commons", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        message: "Write down your usernamne",
        name: "username"
    },
    {
        type: "input",
        message: "Write down your e-mail",
        name: "email"
    },
];

const createReadme = ({ title, description, installation, usage, guidelines, test, license, username, email}) =>
{
` # ${title}

## Description

${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)


## Installation

${installation}

## Usage

${usage}

## Contributing

${guidelines}

## Tests

${test}

## Questions

For any questions, please contact me through my email: ${email} 

My github: https://github.com/${username}
`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    inquirer
        .prompt(questions)

        .then((response) => {
            //Finish this in a bit, figure it out first
            fs.writeFile(fileName, )
        })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();