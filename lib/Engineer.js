class Engineer {
    constructor(name, ID, email, github) {
        this.name = name
        this.ID = ID;
        this.email = email;
        this.github = github;
        this.role = "Engineer";
    }
    
    getRole() {
        return this.role;
    }
    getName(){
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;