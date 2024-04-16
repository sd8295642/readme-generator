// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        
        {
            type: 'input',
            message: 'Please enter a description of your project.',
            name: 'description',
        },
        
        {
            type: 'input',
            message: 'Please enter a table of contents.',
            name: 'contents',
        },

        {
            type: 'input',
            message: 'Please explain how to install your project.',
            name: 'installation',
        },

        {
            type: 'input',
            message: 'What is the usage of this application?',
            name: 'usage',
        },

        {   
            type: 'list',
            message:'What license would you like to use?',
            name: 'license',
            choices: [],
        }, 

        {
            type: 'input',
            message: 'Please list all contributors.',
            name: 'contributors',
        },

        {
            type: 'input',
            message: 'Please describe tests.',
            name: 'tests',
        },

        {
            type: 'input',
            message: 'What questions would you like to include?',
            name: 'questions',
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown({ ...userAnswers }));
    });
}

// Function call to initialize app
init();
