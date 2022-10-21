"use strict";
class PersonInfoOne {
    //constructor
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    // method
    getName() {
        return this.name;
    }
    getDetails() {
        return ("Name is " + this.name + " Age is " + this.age);
    }
}
