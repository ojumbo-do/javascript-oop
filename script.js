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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2040 - this.birthYear);
  }

  greet() {
    console.log(`Hi! ${this.firstName}`);
  }

  get age() {
    return 2040 - this.birthYear;
  }

  //setting a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCL('Jessica Davis', 1997);

console.log(jessica);
jessica.greet();
console.log(jessica.age);

//Facts about classes
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. body of a class is always executed in strict mode

// Setters and getters
const account = {
  owner: 'Dan',
  movements: [200, 300, 120, 300],

  //getter
  get latest() {
    // return this.movements.slice(-1).pop();
    const [...last] = this.movements.slice(-1);
    return last;
  },

  //setter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

//setter
account.latest = 50;
console.log(account.movements);
