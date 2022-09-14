class Intern {
    constructor(name, ID, email, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school;
        this.role = "Intern";

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
}

module.exports = Intern;