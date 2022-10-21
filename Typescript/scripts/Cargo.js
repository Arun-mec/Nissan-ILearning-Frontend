export class Cargo {
    // constructor methods
    constructor(_masskg, _material) {
        this.massKg = _masskg;
        this.material = _material;
    }
    displayValue() {
        console.log(this.massKg);
        console.log(this.material);
    }
}
