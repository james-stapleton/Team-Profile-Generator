// I can now create objects of each type and keep going until I decide to stop;
// Now the question is adding this all to html
// I could add another function in each object creation instance that then appends the object to an html string literal
// for example: <Header> <h1> Your Team: </h1> </Header>    <div id = manager> ${manager} </div> 
// Each time I create a new object, I append that string template with the object variable into my html 

const inquirer = require('inquirer');
const fs = require('fs');
const generateBaseHTML = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager');

const teamArray = [];

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
    .then(({ employee }) => {
        switch(employee) {
            // case "Engineer":
            //     console.log("Create a new engineer");
            //     engineerPrompt();
            //     break;
            // case "Intern":
            //     console.log("Create a new Intern");
            //     internPrompt();
            //     break;
            default:
                generateBaseHTML(teamArray);
        }
    }
    
    )
    .catch((err) => console.error(err));
}

// start by creating a manager
function init() {
inquirer
    .prompt(questionsManager)
    .then((data) => {
        const manager = new Manager(data.name, data.ID, data.email, data.office);
        teamArray.push(manager);
        console.log (manager);
        createMenu();
    })
}



// function to create a new engineer object using the questionsEngineer array 
function engineerPrompt() {
    inquirer
    .prompt(questionsEngineer)
    .then((data) => {
        let engineer = new Engineer(data.name, data.ID, data.email, data.github);
        teamArray.push(engineer);
        createMenu();
    })
}

// add .catch
// .finally run regardless of error
// throw keyword (err)

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
    
    // .then and .catch because it now returns promise
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