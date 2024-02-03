class ToyoyaCar {
    constructor(brand,mileage ) {
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyoyaCar("fortuner",10); //construtor
let lexus = new ToyoyaCar("lexus",12); //construtor
console.log(fortuner)
console.log(lexus)