//JS Prototype

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

Vehicle.prototype.getDetails = function() {
console.log(this);
  return (
    "Vehicle Make is " +
    this.make +
    ". Model is" +
    this.model +
    ". Year is " +
    this.year
  );
};

 class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getDetails() {
    return "Number of doors are " + this.numDoors;
  }
} 

let vehicle = new Vehicle("Maruti", "Ritz", 2012);
let car = new Car("Hyundai", "Verna", 2017, 4);
console.log(vehicle.getDetails());

console.log(car.getDetails());
