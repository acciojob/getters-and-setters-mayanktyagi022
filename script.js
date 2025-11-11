// Base class Person
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Subclass Student
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass Teacher
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

