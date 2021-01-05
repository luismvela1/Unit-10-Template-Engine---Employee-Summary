const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee{
    constructor(name,id,email,officeNunber){
        super(name, id, email);
        this.officeNunber = officeNunber;
    }
    getOfficeNumber(){
        return this.officeNunber;
    }
    getRole(){
        return "Manager";
    }
};
module.exports = Manager;