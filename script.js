'use strict';
//constructor functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const dan = new Person('Dancun', 2000);

// console.log(dan);

// //protoptype
// Person.prototype.calcAge = function () {
//   console.log(2040 - this.birthYear);
// };

// dan.calcAge();

// //Coding Challenge in constructor functions
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   console.log(`${(this.speed += 10)}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`${(this.speed -= 5)}km/h`);
// };

// bmw.accelerate();
// mercedes.accelerate();

// bmw.brake();
// mercedes.brake();

// ////////////////////////////////////
// // Implementing classes in es6

// //class expression
// // const PersonCL = class{}

// //class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hi! ${this.firstName}`);
//   }

//   get age() {
//     return 2040 - this.birthYear;
//   }

//   //setting a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //static in a class
//   static hey() {
//     console.log('Hello There');
//     console.log(this);
//   }
// }

// PersonCL.hey();

// const jessica = new PersonCL('Jessica Davis', 1997);

// console.log(jessica);
// jessica.greet();
// console.log(jessica.age);

// //Facts about classes
// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. body of a class is always executed in strict mode

// // Setters and getters
// const account = {
//   owner: 'Dan',
//   movements: [200, 300, 120, 300],

//   //getter
//   get latest() {
//     // return this.movements.slice(-1).pop();
//     const [...last] = this.movements.slice(-1);
//     return last;
//   },

//   //setter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// //setter
// account.latest = 50;
// console.log(account.movements);

// /////////////////////
// //Static methods

// // static in a constructor
// Person.hey = function () {
//   console.log('Hello There');
//   console.log(this);
// };

// Person.hey();

// /////////////////////
// //Object.Create
// const PersonProto = {
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   },

//   //programmatic way of creating object from proto in object.create
//   init(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   },
// };

// //create the object
// const steven = Object.create(PersonProto);
// console.log(steven);

// //Manual way of creating object from proto in object.create
// steven.name = 'steven';
// steven.birthYear = 2040;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1930);
// sarah.calcAge();

// /////////////////////
// //Challenge Two
// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`${this.make}: ${(this.speed += 10)} km/h`);
//   }

//   brake() {
//     console.log(`${this.make}: ${(this.speed -= 5)} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCL('Ford', 120);

// ford.accelerate();
// ford.brake();

// ford.speedUS = 60;
// console.log(ford);

//inheritance between classes using constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}; // Parent class

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //calling the parent class
  Person.call(this, firstName, birthYear);
  this.course = course;
}; //child class

//creating object manually using object.create()
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName}, I am a ${
      this.course
    } student at the University and I am ${2050 - this.birthYear}years of age`
  );
};

const brenda = new Student('Brenda', 2019, 'hospitality');
brenda.introduce();
brenda.calcAge();

// challenge 03
const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed), (this.charge = charge);
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} is ${this.charge}% charged`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;

  console.log(
    `${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(80);
tesla.brake();
tesla.accelerate();

//Inheritance in ES6 CLasses
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

  //static in a class
  static hey() {
    console.log('Hello There');
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course /*not mandatory */) {
    //don't remember this
    super(fullName, birthYear);
    this.course = course; //not mandatory
  }

  introduce() {
    console.log(
      `My name is ${this.fullName}, I am a ${
        this.course
      } student at the University and I am ${2050 - this.birthYear}years of age`
    );
  }
}

const martha = new StudentCL('Martha Kerubo', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();

// Inheritance using Object.Create
const PersonProto = {
  calcAge() {
    console.log(2040 - this.birthYear);
  },

  //programmatic way of creating object from proto in object.create
  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName}, I am a ${
      this.course
    } student at the University and I am ${2050 - this.birthYear}years of age`
  );
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');

jay.introduce();
jay.calcAge();
