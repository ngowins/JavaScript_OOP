console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    (this.pets = pets), (this.residence = residence);
    this.hobbies = hobbies;
  }

  info() {
    console.log(
      `${this.name} has ${this.pets} pets, lives in ${this.residence}, and enjoys ${this.hobbies}.`
    );
  }

  greeting() {
    console.log(`Hello ${this.name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello ${this.name}! Welcome to TrueCoders.`);
  }
}

const John = new Person("John", 3, "Birmingham, AL", [
  "cycling",
  " learning Javascript",
]);

const Jane = new Coder("Jane", 0, "Riverchase, AL", ["working out"]);

John.greeting();
John.info();
Jane.greeting();
Jane.info();
