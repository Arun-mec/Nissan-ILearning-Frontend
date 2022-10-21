"use strict";
// Astronaut
class AAstronaut {
    //constructor methods
    constructor(_name, _massKg) {
        this.massKg = _massKg;
        this.name = _name;
    }
}
// Cargo class
class CCargo {
    // constructor methods
    constructor(_masskg, _material) {
        this.massKg = _masskg;
        this.material = _material;
    }
}
//Rocket class
class RRocket {
    // constructor
    constructor(_name, _capacity) {
        this.name = _name;
        this.totalCapacity = _capacity;
    }
    // methods
    sumMass(items) {
        return 0;
    }
    currentMassKg() {
        return 0;
    }
    canAdd(item) {
        return false;
    }
    addCargo(cargo) {
        return false;
    }
    addAstronaut(astronaut) {
        return false;
    }
}
