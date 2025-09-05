const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; 
console.log(newNumbers); 

const user = { name: "Shandi",age: 19};
const updatedUser = { ...user, hobby: "singing"}
console.log(updatedUser); 


function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 
