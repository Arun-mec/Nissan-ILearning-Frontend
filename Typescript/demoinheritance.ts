class Employee{

    //declare
    constructor(name: string){
        console.log(name+" Good evening!" );
    }
    getId(){
        return 1;
    }
 
}

class PermanentEmployee extends Employee{
    constructor(name:string){
        super(name);
        console.log(name+" from Permanent Employee");
    }
    getId(){
        return super.getId();
    }
}

let emp = new PermanentEmployee("Arun")
console.log(emp.getId);



