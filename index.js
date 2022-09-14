const inquirer = require("inquirer");
const fs = require("fs");
const generateBaseHTML = require("./utils/generateHTML.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];

// array of questions for prompt to create new Manager instance object
const questionsManager = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "email",
    message: "Email? ",
  },
  {
    type: "input",
    name: "ID",
    message: "ID? ",
  },
  {
    type: "input",
    name: "office",
    message: "office? ",
  },
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
    message: "ID? ",
  },
  {
    type: "input",
    name: "email",
    message: "Email? ",
  },
  {
    type: "input",
    name: "github",
    message: "Github username? ",
  },
];
// array of questions for new intern
const questionsIntern = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "ID",
    message: "ID? ",
  },
  {
    type: "input",
    name: "email",
    message: "Email? ",
  },
  {
    type: "input",
    name: "school",
    message: "School? ",
  },
];
// function to create menu to select which type of team member you'd like to add, or to finish the program
function createMenu() {
  // prompt the user with a list, right now only containing 3 options in a switch statement, but easily scalable if new employee types are added in the future
  // Each switch case includes a call to a function that uses an inquirer prompt to create a new object of the desired type
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Add an engineer or an intern",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then(({ employee }) => {
      switch (employee) {
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        default:
          console.log(teamArray);
          console.log(generateBaseHTML(teamArray));
          writeHTML(generateBaseHTML(teamArray));
      }
    })
    .catch((err) => console.error(err));
}

// start by creating a manager
function init() {
  inquirer.prompt(questionsManager).then((data) => {
    const manager = new Manager(data.name, data.ID, data.email, data.office);
    teamArray.push(manager);
    console.log(manager);
    createMenu();
  });
}

// function to create a new engineer object using the questionsEngineer array
function engineerPrompt() {
  inquirer.prompt(questionsEngineer).then((data) => {
    let engineer = new Engineer(data.name, data.ID, data.email, data.github);
    teamArray.push(engineer);
    createMenu();
  });
}

function internPrompt() {
  inquirer.prompt(questionsIntern).then((data) => {
    console.log(data);
    let intern = new Intern(data.name, data.ID, data.email, data.school);
    teamArray.push(intern);
    createMenu();
  });
}

function writeHTML(stringHTML) {
  let str = stringHTML.toString();
  let template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Enter your description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>Your Team!</title>
      </head>
      <body>
     
        ${str}
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      </body>
    </html>
`;

  fs.writeFile("./template.html", template, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
}

init();
