// Function for adding two
const numone ="Hello ";
const numtwo =12;
var addNumbers = (firstNum:any,secondNum:any)=>{
    return firstNum+secondNum;
}
const result = addNumbers(numone,numtwo)
console.log(result)

// declare variables
let firstNum = 100;
var temp:number;
// custom function
function test(){
    if (firstNum>0){
        temp=firstNum;
    }
   console.log(temp);
}
test()

//object creation
const person:{
    name:string,
    age:number,
    hobbies:string[]
}={
    name:"Arun",
    age:12,
    hobbies:["sports","cooking"]
}

console.log(person.name);
person.hobbies.forEach(element => {
    console.log(element.toUpperCase());
});    

function greetPerson(name: String){
    if (name=="Dollu"){
        console.log("Hello "+name);
    }else{
        console.log("Hei "+name);
    }
}
greetPerson("Dollu")
greetPerson("Chico")

let letters:any = "AWESOME";
for (let letter in letters){
    console.log(letters[letter]);
}
for (let letter of letters){
    console.log(letter);
}

// create a class
class Person{
    // instance variables
    name:string="";
    age:number=0

    // constructor variables
    Person(_name:string,_age:number){
        this.name = _name;
        this.age = _age;
    }

    //static methods
    static display(){
        console.log("Static method");
    }

    //greet methods
    greetPerson(){
        console.log("Hei arun");  
    }
}    

let personOne = new Person()
console.log(personOne);
personOne.greetPerson();


// String operatuions in ts

let word:string = "Hei how are you?"
let wordArray = word.split(" ")
console.log(wordArray)
console.log(word.charAt(10));
console.log(word.indexOf('a'));
console.log(word.replace("Hei","Poda"));
console.log(word.trim());
console.log(word.substr(0,2));
console.log(word.substring(0,10));



