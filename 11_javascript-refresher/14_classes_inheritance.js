class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hi, I am " + this.name);
    }
}

// Subclass Student extends Person
class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}

// Example usage
const p1 = new Person("Shan");
p1.sayHello(); // Hi, I am Shan

const s1 = new Student("Elmer");
s1.sayHello(); 
s1.study();   