// Austronaut class
export class Astronaut {
    //  Constructor
    constructor(_name, _mass) {
        this.massKg = _mass;
        this.name = _name;
    }
    displayValue() {
        console.log(this.massKg);
        console.log(this.name);
    }
}
