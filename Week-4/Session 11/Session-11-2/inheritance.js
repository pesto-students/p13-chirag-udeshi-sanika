//Inheritance
console.log("Inheritance : ");
class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    drive = () => {
        console.log("Driving " + this.make + " " + this.model + ".");
    }

}

class Car extends Vehicle{
    constructor(make, model, year, color, numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car{

    constructor(make, model, year, color, numSeats, isAvailable){
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

let myCar = new RideShareCar("maruti", "ritz", 2009, "pink", 5, true);
myCar.drive();
console.log("It is bought in year " + myCar.year + ". Color is " + myCar.color + ". Seats are " + myCar.numSeats + ".");
console.log(myCar.isAvailable === true ? "It is available for ride sharing. " : "It is not available for ride sharing. ");