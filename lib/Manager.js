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
    getName(){
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getOffice() {
        return this.office;
    }
}

module.exports = Manager;