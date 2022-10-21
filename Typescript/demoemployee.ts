interface EmployeeInt{
    // declaring the variables
    name:string;
    age:number;
    salary:string;
}
// permanent employee
class PermanentEmp implements EmployeeInt{
    name!: string;
    age!: number;
    salary!: string;
    
    constructor(_name:string,_age:number){
        this.name = _name;
        this.age = _age;
        this.salary = "Your salary is 50K per month"
    }
    getDetails(){
        console.log("Name:"+this.name+" Age"+this.age+" Salary"+this.salary)
    }
    
}
// temp employee
class TemporaryEmp implements EmployeeInt{
    name!: string;
    age!: number;
    salary!: string;
    
    constructor(_name:string,_age:number){
        this.name = _name;
        this.age = _age;
        this.salary = "Your wage is 800 rupees a day"
    }
    getDetails(){
        console.log("Name:"+this.name+" Age"+this.age+" Salary"+this.salary)
    }
}

let tempOne = new TemporaryEmp("Arun",12);
let permOne = new PermanentEmp("Amal",22);

tempOne.getDetails()
permOne.getDetails()