let hobbies = ["Singing", "Watching movies","Dancing"]
hobbies.map(h => console.log(h));


let student = { name: "Shan", age: 19};
let { name, age } = student;
console.log(name, age);


let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);