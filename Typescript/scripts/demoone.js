"use strict";
// Function for adding two
const numone = "Hello ";
const numtwo = 12;
var addNumbers = (firstNum, secondNum) => {
    return firstNum + secondNum;
};
const result = addNumbers(numone, numtwo);
console.log(result);
// declare variables
let firstNum = 100;
var temp;
// custom function
function test() {
    if (firstNum > 0) {
        temp = firstNum;
    }
    console.log(temp);
}
test();
//object creation
const person = {
    name: "Arun",
    age: 12,
    hobbies: ["sports", "cooking"]
};
console.log(person.name);
person.hobbies.forEach(element => {
    console.log(element.toUpperCase());
});
function greetPerson(name) {
    if (name == "Dollu") {
        console.log("Hello " + name);
    }
    else {
        console.log("Hei " + name);
    }
}
greetPerson("Dollu");
greetPerson("Chico");
let letters = "AWESOME";
for (let letter in letters) {
    console.log(letters[letter]);
}
for (let letter of letters) {
    console.log(letter);
}
// create a class
class Person {
    constructor() {
        // instance variables
        this.name = "";
        this.age = 0;
    }
    // constructor variables
    Person(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    //static methods
    static display() {
        console.log("Static method");
    }
    //greet methods
    greetPerson() {
        console.log("Hei arun");
    }
}
let personOne = new Person();
console.log(personOne);
personOne.greetPerson();
// String operatuions in ts
let word = "Hei how are you?";
let wordArray = word.split(" ");
console.log(wordArray);
console.log(word.charAt(10));
console.log(word.indexOf('a'));
console.log(word.replace("Hei", "Poda"));
console.log(word.trim());
console.log(word.substr(0, 2));
console.log(word.substring(0, 10));
