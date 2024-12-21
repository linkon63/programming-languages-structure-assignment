// Record-like structure using a JavaScript class

// Define a Person class
class Person {
    constructor(name, age) {
        this.name = name; // Field for storing the name
        this.age = age;   // Field for storing the age
    }
}

// Create an instance of the Person class
let personInstance = new Person("Linkon", 22);

// Accessing fields of the instance
console.log(`Name: ${personInstance.name}, Age: ${personInstance.age}`);
