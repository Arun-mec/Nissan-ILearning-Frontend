"use strict";
// interface interfaceName{
class Tiger {
    constructor() {
        this.roar = "Roaaaarrrr!!";
    }
}
class Lion {
    // method
    constructor() {
        this.roar = "RRRRasdjada";
    }
}
function pantheraSound(_panthera) {
    // Making the sound
    console.log(`Roar sound ${_panthera.roar}`);
}
let tiger = new Tiger();
let lion = new Lion();
pantheraSound(tiger);
pantheraSound(lion);
