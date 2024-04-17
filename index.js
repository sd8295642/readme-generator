// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, userAnswers) {
    fs.writeFile(fileName, userAnswers, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(userAnswers)
        writeToFile('README14.md', generateMarkdown({ ...userAnswers }));
    });
}

// Function call to initialize app
init();
