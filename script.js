'use strict';
//constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const dan = new Person('Dancun', 2000);

console.log(dan);

//protoptype
Person.prototype;
