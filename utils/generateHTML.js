
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

class Intern {
    constructor(name, ID, email, school) {
        this.name = name;
        this.ID - ID;
        this.email = email;
        this.school = school;
    }
}
// Create function that creates a new instance manager object and then calls another function for a menu to select an engineer or intern

function createManager(name, ID, email, office) {
    var manager = new Manager(name, ID, email, office);
    return manager;
}
// Create a new engineer/intern object then return to the menu
function createEngineer(name, ID, email, github) {
    var engineer = new Engineer(name, ID, email, github);
    return engineer;
}

function createIntern(name, ID, email, school) {
    var intern = new Intern(name, ID, email, school);
    return intern;
}
// Create function to add these objects to an HTML page


module.exports.log = log;
module.exports.logMessage = logMessage;
module.exports.createManager = createManager;
module.exports.createEngineer = createEngineer;
module.exports.createIntern = createIntern;