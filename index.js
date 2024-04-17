// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions requesting user input which will then be passed into functions
const questions = [
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
            choices: ['None', 'MIT', 'IBM', 'Mozilla Public License', 'ISC', 'Apache']
        }, 

        {
            type: 'input',
            message: 'Please list all contributors.',
            name: 'contributing',
        },

        {
            type: 'input',
            message: 'Please describe tests.',
            name: 'testing',
        },

        {
            type: 'input',
            message: 'Please enter your Github username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email',
        }
    ]

// Uses user input to write a file
function writeToFile(fileName, userAnswers) {
    fs.writeFile(fileName, userAnswers, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Initializes the app by running inquirer to prompt the user for input
// also calls the function which creates a new Readme.md file from the user answers
// by calling the generateMarkdown function included in the utils folder
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(userAnswers)
        writeToFile('README.md', generateMarkdown({ ...userAnswers }));
    });
}

// Function call to initialize app
init();
