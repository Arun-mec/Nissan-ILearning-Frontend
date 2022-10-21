interface Payload{
    massKg: number;
    
}
// Astronaut
class AAstronaut implements Payload{
    //instance variables
    massKg!:number;
    name!:string;

    //constructor methods
    constructor(_name:string,_massKg:number){
        this.massKg = _massKg;
        this.name = _name;
    }
}

// Cargo class
class CCargo implements Payload{
    // instance variables
    massKg!:number;
    material!:string;

    // constructor methods
    constructor(_masskg:number,_material:string){
        this.massKg = _masskg;
        this.material = _material;
    }
}

//Rocket class
class RRocket{
    // instance variables
    name!:string;
    totalCapacity!:number;
    cargoItems!:CCargo[];
    astronauts!:AAstronaut[];

    // constructor
    constructor(_name:string,_capacity:number){
        this.name=_name;
        this.totalCapacity=_capacity;
    }

    // methods
    sumMass(items:Payload[]):number{
        return 0;
    }
    currentMassKg():number{
         return 0;
    }
    canAdd(item: Payload): boolean{
        return false;
    }
    addCargo(cargo: CCargo): boolean{
        return false;
    }
    addAstronaut(astronaut: AAstronaut): boolean{
        return false;
    }
}