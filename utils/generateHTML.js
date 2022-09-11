
log = () => console.log("Generate HTML file linked!");
logMessage = (message) => console.log(message);
module.exports.log = log;
module.exports.logMessage = logMessage;

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
        this.name = namel
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
// Create function that creates a manager object and then calls another function for a menu to select an engineer or intern
// Create a new engineer/intern object then return to the menu
// Create function to add these objects to an HTML page
