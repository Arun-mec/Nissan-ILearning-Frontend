import {IPayload} from './IPayload'
// Austronaut class
export class Astronaut implements IPayload{
    //  Instance variables
    name!:string;
    massKg!: number;
    //  Constructor
    constructor(_name:string,_mass:number){
        this.massKg = _mass;
        this.name = _name;
    }
    displayValue(){
        console.log(this.massKg);
        console.log(this.name);
    }
}