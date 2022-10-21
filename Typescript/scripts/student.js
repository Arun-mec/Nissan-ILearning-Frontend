"use strict";
class PersonInfo {
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
//student class
class StudentInfo extends PersonInfo {
    //constructor
    constructor(_name, _age, _tmarks) {
        super(_name, _age);
        this.marks = _tmarks;
    }
    // method
    getMarks() {
        return this.marks;
    }
    // method
    getFullName() {
        return this.name;
    }
    // method
    setMarks(_tmarks) {
        this.marks = _tmarks;
    }
}
let stdOne = new StudentInfo('Sheena', 23, 600);
console.log(stdOne.getDetails());
console.log(stdOne.getFullName());
