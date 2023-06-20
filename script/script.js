"use strict";

class Person {
  constructor(name, gender) {
    this._name = name;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get gender() {
    return this._gender;
  }

  set gender(newGender) {
    this._gender = newGender;
  }
}

class Apartment {
  constructor() {
    this._residents = [];
  }

  get residents() {
    return this._residents;
  }

  addResident(person) {
    this._residents.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this._apartments = [];
    this._maxApartments = maxApartments;
  }

  get apartments() {
    return this._apartments;
  }

  addApartment(apartment) {
    if (this._apartments.length < this._maxApartments) {
      this._apartments.push(apartment);
    } else {
      console.log("Cannot add more apartments. Maximum limit reached.");
    }
  }
}

const person1 = new Person("John", "Male");
const person2 = new Person("Jane", "Female");
console.log(person1, person2);

console.log(person1.name);
person1.name = "Jonathan";
console.log(person1.name);

const apartment1 = new Apartment();
const apartment2 = new Apartment();
console.log(apartment1);

apartment1.addResident(person1);
apartment2.addResident(person2);

const house = new House(2);
console.log(house);

house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(apartment1, apartment2);
