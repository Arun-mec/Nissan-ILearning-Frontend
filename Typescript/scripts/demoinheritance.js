"use strict";
class Employee {
    //declare
    constructor(name) {
        console.log(name + " Good evening!");
    }
    getId() {
        return 1;
    }
}
class PermanentEmployee extends Employee {
    constructor(name) {
        super(name);
        console.log(name + " from Permanent Employee");
    }
    getId() {
        return super.getId();
    }
}
let emp = new PermanentEmployee("Arun");
console.log(emp.getId);
