let foods = ["Fried Chicken", "Fries", "Buldak"]
foods.push("Pizza")
console.log(foods)
foods.shift()
console.log(foods)


for (let food of foods) {
  console.log(food);
}

let likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);