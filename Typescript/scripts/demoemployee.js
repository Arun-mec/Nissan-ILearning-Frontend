"use strict";
// permanent employee
class PermanentEmp {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.salary = "Your salary is 50K per month";
    }
    getDetails() {
        console.log("Name:" + this.name + " Age" + this.age + " Salary" + this.salary);
    }
}
// temp employee
class TemporaryEmp {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.salary = "Your wage is 800 rupees a day";
    }
    getDetails() {
        console.log("Name:" + this.name + " Age" + this.age + " Salary" + this.salary);
    }
}
let tempOne = new TemporaryEmp("Arun", 12);
let permOne = new PermanentEmp("Amal", 22);
tempOne.getDetails();
permOne.getDetails();
