const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');

generateHTML.log();
generateHTML.logMessage("Also I can export multiple functions");

const questions = [{
    type: "input",
    name: "name",
    message: "What is the manager's name?"
},
{
    type: "input",
    name: "email",
    message: "Email? ",
},
{
    type: "input",
    name: "ID",
    message: "ID? "
},
{
    type: "input",
    name: "office",
    message: "office? "
}
]

inquirer
    .prompt(questions)
    .then((data) => {
        const manager = generateHTML.createManager(data.name, data.ID, data.email, data.office);
        console.log (manager);
    })
