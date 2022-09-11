const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');

generateHTML.log();
generateHTML.logMessage("Also I can export multiple functions");

// array of questions for prompt to create new Manager instance object
const questionsManager = [
{
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
];

const questionsEngineer = [
{
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
},
{
    type: "input",
    name: "ID",
    message: "ID? "
},
{
    type: "input",
    name: "email",
    message: "Email? "
},
{
    type: "input",
    name: "github",
    message: "Github username? "
}
]

const questionsIntern = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "ID? "
    },
    {
        type: "input",
        name: "email",
        message: "Email? "
    },
    {
        type: "input",
        name: "school",
        message: "School? "
    }
    ]

function createMenu() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employee",
            message: "Add an engineer or an intern",
            choices: ['Engineer', 'Intern', 'Finish'] 
        }
    ])
    .then((data) => {
        var employee = data.employee;
        switch(employee) {
            case "Engineer":
                console.log("Create a new engineer");
                engineerPrompt();
                break;
            case "Intern":
                console.log("Create a new Intern");
                internPrompt();
                break;
            case"Finish":
                generateHTML.page();
                break;
        }
    }
    
    )
}
function init() {
inquirer
    .prompt(questionsManager)
    .then((data) => {
        const manager = generateHTML.createManager(data.name, data.ID, data.email, data.office);
        console.log (manager);
        createMenu();
    })
}

function engineerPrompt() {
    inquirer
    .prompt(questionsEngineer)
    .then((data) => {
        let engineer = generateHTML.createEngineer(data.name, data.ID, data.email, data.github);
        console.log(engineer);
        createMenu();
    })
}

function internPrompt() {
    inquirer
    .prompt(questionsIntern)
    .then((data) => {
        console.log(data);
        let intern = generateHTML.createIntern(data.name, data.internID, data.email, data.school);
        console.log(intern);
        createMenu();
    })
    
}

init();