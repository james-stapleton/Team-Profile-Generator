log = () => console.log("Generate HTML file linked!");
logMessage = (message) => console.log(message);


// Create classes for Manager, Engineer and Intern. 
    // Classes contain team manager’s name, employee ID, email address, and office number && engineer’s name, ID, email, and GitHub username && intern’s name, ID, email, and school

class Manager {
    constructor (name, ID, email, office) {
        //attributes
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office;
    }
    //methods
}

class Engineer {
    constructor(name, ID, email, Github) {
        this.name = name
        this.ID = ID;
        this.email = email;
        this.Github = Github;
    }
}

function engineerHTML(stringHTML, data) {
    //! Pass a global variable for the HTML here, keep appending to it, god I really hope I can append to a string literal
}

class Intern {
    constructor(name, ID, email, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school;
    }
}
// Create function that creates a new instance manager object and then calls another function for a menu to select an engineer or intern

function createManager(name, ID, email, office) {
    var manager = new Manager(name, ID, email, office);
    return manager;
}
// Create a new engineer/intern object 
function createEngineer(name, ID, email, github) {
    var engineer = new Engineer(name, ID, email, github);
    return engineer;
}

function createIntern(name, ID, email, school) {
    var intern = new Intern(name, ID, email, school);
    return intern;
}

// Manager html card generator
function managerHTML(manager) {
  let stringHTML = 
`<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Manager</h5>
<ul>
<li>${manager.name}</li>
<li>${manager.ID}</li>
<li>${manager.email}</li>
<li>${manager.office}</li>
</ul>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
return stringHTML;
};


// Create function to add these objects to an HTML page
// Use string template literal based on template.html
function page(manager) {
    console.log(`Objects will appear here`);
    let stringHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<title>Your Team!</title>
</head>
<body>

${managerHTML(manager)};


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>`
console.log(stringHTML);
return stringHTML;
}


module.exports.log = log;
module.exports.logMessage = logMessage;
module.exports.createManager = createManager;
module.exports.createEngineer = createEngineer;
module.exports.createIntern = createIntern;
module.exports.page = page;