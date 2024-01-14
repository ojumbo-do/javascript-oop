'use strict';
//constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dan = new Person('Dancun', 2000);

console.log(dan);

//protoptype
Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};

dan.calcAge();

//Coding Challenge in constructor functions
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  console.log(`${(this.speed += 10)}km/h`);
};

Car.prototype.brake = function () {
  console.log(`${(this.speed -= 5)}km/h`);
};

bmw.accelerate();
mercedes.accelerate();

bmw.brake();
mercedes.brake();

////////////////////////////////////
// Implementing classes in es6

//class expression
// const PersonCL = class{}

//class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2040 - this.birthYear);
  }

  greet() {
    console.log(`Hi! ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', 1997);

console.log(jessica);
jessica.greet();
