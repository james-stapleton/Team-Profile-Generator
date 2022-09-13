class Manager {
    constructor (name, ID, email, office) {
        //attributes
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.office = office;
        this.role = "Manager";
    }
    //methods
    getRole() {
        return this.role;
    }
}

module.exports = Manager;