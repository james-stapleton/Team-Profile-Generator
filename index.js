// I can now create objects of each type and keep going until I decide to stop;
// Now the question is adding this all to html
// I could add another function in each object creation instance that then appends the object to an html string literal
// for example: <Header> <h1> Your Team: </h1> </Header>    <div id = manager> ${manager} </div> 
// Each time I create a new object, I append that string template with the object variable into my html 
//! I can simply append the card html to a string template setup for engineer and for intern, meaning I will have an engineer template that is full of engineer cards, and an intern template that is full of intern cards, and those individual templates will be added to the main html file at the end. 


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
// Array of questions for new engineer
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
// array of questions for new intern
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
// function to create menu to select which type of team member you'd like to add, or to finish the program
function createMenu() {
// prompt the user with a list, right now only containing 3 options in a switch statement, but easily scalable if new employee types are added in the future
// Each switch case includes a call to a function that user an inquirer prompt to create a new object of the desired type
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
                // generateHTML.page(manager);
                break;
        }
    }
    
    )
}

// start by creating a manager
function init() {
inquirer
    .prompt(questionsManager)
    .then((data) => {
        const manager = generateHTML.createManager(data.name, data.ID, data.email, data.office);
        console.log (manager);
        writeHTML(generateHTML.page(manager)); //! This call the writeHTML function in this file using the stringHTML returned by the page function in the generateHTML file, which itself uses the string template from the managerHTML function in the generateHTML file. I need to make this work with engineers and interns, every time a new one is created, without knowing how many will be created. This means I can simply append the card html to a string template setup for engineer and for intern, meaning I will have an engineer template that is full of engineer cards, and an intern template that is full of intern cards, and those individual templates will be added to the main html file at the end. 

        createMenu();
    })
}

// function to create a new engineer object using the questionsEngineer array 
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

function writeHTML(stringHTML) {
    
    fs.writeFile("./template.html", stringHTML, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("success");
    }
})
}

init();