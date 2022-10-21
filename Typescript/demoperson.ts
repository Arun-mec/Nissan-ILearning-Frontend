class PersonInfoOne{
    
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