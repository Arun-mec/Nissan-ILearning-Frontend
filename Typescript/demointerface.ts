// interface interfaceName{

// }
// class classname implements interface name
// properties
// constructors

// Problem
// Panthers --> Tiger --> Lion

interface Panthera{
    // propertyname
    roar:string;
}
class Tiger implements Panthera{
    roar!: string;

    constructor(){
        this.roar="Roaaaarrrr!!"
    }
}

class Lion implements Panthera{
    // properties
    roar!:string;

    // method
    constructor(){
        this.roar = "RRRRasdjada"
    }
}

function pantheraSound(_panthera:Panthera){
    // Making the sound
    console.log(`Roar sound ${_panthera.roar}`);
}

let tiger = new Tiger();
let lion = new Lion();
pantheraSound(tiger);
pantheraSound(lion);
