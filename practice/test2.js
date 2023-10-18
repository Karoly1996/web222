function Person (name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`Hi, my name is ${this.name} and i am ${this.age} years old`);
    }
}

let myPerson = new Person("John", 25);
let intro = myPerson.introduce();