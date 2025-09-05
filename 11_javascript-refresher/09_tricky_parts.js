console.log("2" == 2) 
console.log("2" === 2) 


let a;
let b = null;
console.log("a:", a) 
console.log("b:", b)

const obj = {
  value: 23,

  regularFunc: function() {
    console.log("regularFunc this.value:", this.value)
  },

  arrowFunc: () => {
    console.log("arrowFunc this.value:", this.value)
  }
}

obj.regularFunc()
obj.arrowFunc()


let arr1 = [1, 2, 3]
let arr2 = arr1

arr2.push(4)

console.log("arr1:", arr1)
console.log("arr2:", arr2)


let arr3 = [1, 2, 3]
let arr4 = [...arr3]

arr4.push(4)

console.log("arr3:", arr3) 
console.log("arr4:", arr4)
