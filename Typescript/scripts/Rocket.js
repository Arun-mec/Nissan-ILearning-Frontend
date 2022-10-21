import { Astronaut } from './Astronaut.js';
import { Cargo } from './Cargo.js';
//Rocket class
class Rocket {
    // constructor
    constructor(_name, _capacity) {
        this.name = _name;
        this.totalCapacity = _capacity;
    }
    // methods
    sumMass(items) {
        let sumMass = 0;
        items.forEach((item) => {
            sumMass += item.massKg;
        });
        return sumMass;
    }
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item) {
        if (this.currentMassKg() + item.massKg < this.totalCapacity) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
// declaring the objects
let rocketOne = new Rocket("PSLV5", 450);
let cargoOne = new Cargo(200, "Panel");
let cargoTwo = new Cargo(10, "Cloth");
let austroOne = new Astronaut("Abel", 50);
let austroTwo = new Astronaut("Mane", 52);
// declaring the extra objects to be added
let cargoThr = new Cargo(200, "Cloth");
let austroThr = new Astronaut("Abel", 40);
// Adding vaues to the array
rocketOne.cargoItems = [cargoOne, cargoTwo];
rocketOne.astronauts = [austroOne, austroTwo];
console.log(rocketOne.sumMass(rocketOne.cargoItems));
console.log(rocketOne.sumMass(rocketOne.astronauts));
console.log(rocketOne.currentMassKg());
console.log(rocketOne.canAdd(cargoThr));
console.log(rocketOne.canAdd(austroThr));
console.log(rocketOne.addCargo(cargoThr));
console.log(rocketOne.addAstronaut(austroThr));
console.log(rocketOne.cargoItems);
console.log(rocketOne.astronauts);
