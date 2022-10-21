class PersonInfo{
    
    // declaring the variables 
    protected name!:string;
    protected age!:number;

    //constructor
    constructor(_name:string,_age:number){
        this.name = _name;
        this.age = _age;
    }

    // method
    private getName():string {
        return this.name;
    }
    
    public getDetails():string{
        return ("Name is "+this.name+" Age is "+this.age)

    }
}
//student class
class StudentInfo extends PersonInfo{
    // declare variable
    marks!:number;

    //constructor
    constructor(_name:string,_age:number,_tmarks:number){
        super(_name,_age);
        this.marks = _tmarks;
    }

    // method
    getMarks():number{
        return this.marks;
    }
    // method
    getFullName():string{
        return this.name;
    }
    // method
    setMarks(_tmarks:number){
        this.marks = _tmarks;
    }
}

let stdOne = new StudentInfo('Sheena',23,600);
console.log(stdOne.getDetails());
console.log(stdOne.getFullName());
