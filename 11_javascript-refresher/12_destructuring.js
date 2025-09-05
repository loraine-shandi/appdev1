const person = {
  name: "Shandi", 
  age: 19
}

const { name, age } = person;  
console.log(name); 
console.log(age);

const hobbies = ["singing","watching movies"]
const [hobby1, hobby2] = hobbies
console.log(hobby1) 
console.log(hobby2)

function printName({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`)
}

printName(person)