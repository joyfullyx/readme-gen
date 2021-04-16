// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// questions array for command line prompt
const questions =[
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: "Briefly describe your project",
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the installation process?',
            name: 'install', 
        },
        {
            type: 'input',
            message: 'What is the purpose of this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Name contributors to this project, if any:',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Are there any tests? If so, what are the guidelines for testing?',
            name: 'test', 
        },
        {
            type: 'list',
            message: 'Select a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'IBM Public License v1.0', 'Mozilla Public License 2.0', 'Perl', 'N/A'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }
    ]
    inquirer.prompt(questions).then(answers => {
    console.log(answers)
    // write to README file
    fs.writeFile('READMEgenerated.md', generate(answers), (err) => {
        if (err) {
            throw err
        } else {
            console.log('✔︎ README.md successfully generated!')
        }
    })
});
function init() {
    
}
init();