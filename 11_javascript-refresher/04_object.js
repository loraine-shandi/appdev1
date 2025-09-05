let aboutMe = {
    name: "Shandi",
    age: 19,
    Program: "BSIS",

    introduce: function()
    {console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)}
}

aboutMe.hobby = "Singing"
console.log(aboutMe)
aboutMe.introduce()
