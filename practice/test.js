console.log("hello world");
// Running the code - node "filename"

// var myVar = "hello"



// function letSeneca(name, program) {
//     console.log(name + "isdasds" + program);
// }

// letSeneca("karoly", "web")


// ${name};

// function Car (colour, year, engine) {
//     this.colour = colour;    // this.colour is refering to object colour
//     this.year = year;
//     this.engine = engine;

//     this.paintCar = function (newPaint) {
//         this.colour = newPaint;
//     }
// };

// let corolla = new Car("blue", 2022, 6); 
// console.log(corolla); 



/* Test 2

*/

// Constructor model 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function() {
        console.log(`The ${this.year} ${this.make} ${this.model} is now being driven.`);
    };
  }
  
  // Creating instances (objects) using the Car constructor
  let car1 = new Car('Toyota', 'Camry', 2020);
  let car2 = new Car('Honda', 'Civic', 2019);
  
  // Accessing properties of the objects
  console.log(car1.make); // Output: Toyota
  console.log(car2.year); // Output: 2019
  
  // Calling a method of the objects
  car1.drive(); // Output: The 2020 Toyota Camry is now being driven.
  car2.drive(); // Output: The 2019 Honda Civic is now being driven.
  
// In this example, we have a constructor function Car that takes three parameters (make, model, and year). 
// Inside the function, this refers to the newly created object. We assign the passed parameters to properties of the object.
// The drive function is a method attached to each Car object, allowing it to perform actions.
// To create new Car objects, we use the new keyword followed by the constructor function (new Car(...)). 
// This initializes a new object with the specified properties.
// Keep in mind that in practice, you would typically define shared methods (like drive) on the prototype of the constructor function to conserve memory and improve performance, 
// especially if you plan to create many instances.


// est: Weeks 3 and 4
// Multiple Choice:

// Which built-in object in JavaScript is used to work with regular expressions?

// A) Math
// B) Array
// C) RegExp
// D) String
// Answer: C
// What is the purpose of a constructor function in JavaScript?

// A) To perform mathematical calculations
// B) To create and initialize objects
// C) To define conditional statements
// D) To manipulate strings
// Answer: B
// Which built-in object provides methods and properties for performing mathematical operations?

// A) Math
// B) Date
// C) RegExp
// D) String
// Answer: A
// What is the result of "hello".toUpperCase() in JavaScript?

// A) "hello"
// B) "HELLO"
// C) "Hello"
// D) undefined
// Answer: B
// What does the prototype property of a constructor function allow you to do in JavaScript?

// A) It allows you to create new instances of the constructor function
// B) It allows you to add properties and methods to all instances of the constructor function
// C) It allows you to access the parent object of an instance
// D) It allows you to delete instances of the constructor function
// Answer: B
// Which built-in object provides methods for working with dates and times in JavaScript?

// A) Math
// B) Date
// C) String
// D) RegExp
// Answer: B
// What is the purpose of the new keyword when creating an object using a constructor function?

// A) It defines a new variable
// B) It initializes a new object based on the constructor function
// C) It deletes an existing object
// D) It converts a string to a number
// Answer: B
// Which built-in object is used to store and manipulate collections of data in JavaScript?

// A) Date
// B) Array
// C) RegExp
// D) Math
// Answer: B
// Matching:
// Match the following terms with their corresponding definitions.

// Prototype - A) The blueprint for creating objects in JavaScript.

// Constructor Function - B) A special function used to create and initialize objects.

// Object - C) A reference to an existing object in memory.

// Answers:
// 1 - A, 2 - B, 3 - C

// Coding Question:

// Write a constructor function called Person that takes two parameters: firstName and lastName, and initializes them as properties of the object. 
//Additionally, add a method called fullName that concatenates the firstName and lastName and returns the full name.

// // Step 1: Define the Constructor Function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
  
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name}.`);
//     };
// }

// // Step 2: Create Objects from the Constructor
// let john = new Person('John Doe', 30);
// let jane = new Person('Jane Doe', 25);
// let bob = new Person('Bob Smith', 35);

// // Step 3: Access Object Properties and Call Methods
// console.log(john.name); // Output: 'John Doe'
// console.log(john.age);  // Output: 30
// john.greet();          // Output: 'Hello, my name is John Doe.'

// console.log(jane.name); // Output: 'Jane Doe'
// console.log(jane.age);  // Output: 25
// jane.greet();          // Output: 'Hello, my name is Jane Doe.'

// console.log(bob.name);  // Output: 'Bob Smith'
// console.log(bob.age);   // Output: 35
// bob.greet();           // Output: 'Hello, my name is Bob Smith.'


      // prototype 
      // Step 1: Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add a method to the prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// Step 3: Create an instance of Person
const john = new Person('John Doe', 30);

// Step 4: Access the method
john.greet(); // Output: "Hello, my name is John Doe and I am 30 years old."

// Define a function called createPerson that takes name and age as arguments
function createPerson(name, age) {
  // Create and return an object with name and age properties
  return {
      name: name,
      age: age,
      
      // Define a method called sayHello within the object
      sayHello: function() {
          // Use the 'this' keyword to access the object's properties
          return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
      }
  };
}

// Call the createPerson function, passing 'John' as the name and 30 as the age
let john = createPerson('John', 30);

// Call the sayHello method of the john object and log the result to the console
console.log(john.sayHello());