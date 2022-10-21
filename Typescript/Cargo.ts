import { IPayload } from "./IPayload";

export class Cargo implements IPayload{
    // declaring the variables
    massKg!: number;
    material!:string;

    // constructor methods
    constructor(_masskg:number,_material:string){
        this.massKg = _masskg;
        this.material = _material;
    }
    displayValue(){
        console.log(this.massKg);
        console.log(this.material);
    }
}
