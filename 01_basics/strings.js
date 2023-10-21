
const name = "Omkar Jadhav"
const count = 18
// console.log(name)

// concatenating the string (old method not a good practice)
// console.log(st + " is a Batman.")

// concatenating using backticks *** 
console.log(`Hello my name is ${name} and my repocount on github is ${count}.`)

// another way to define string 
const gameName = new String("Call of Duty") 
console.log(gameName) 

// you can access the elements using indexing 
console.log(gameName[0])

// you can use the inbuilt functions 
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("c")) // if present returns index, if not returns -1

// converting to substring 
const newString = gameName.substring(0, 4) // you cannot use negative values here
console.log(newString) 

// slicing 
const anotherString = gameName.slice(-5, -2) // you can provide the negative values also (same as slicing in python)
console.log(anotherString)

// trim method: to remove the blank(white spaces) spaces 
const newStringOne = "               omkar             "
console.log(newStringOne)
console.log(newStringOne.trim())

const anotherGame = new String("Prince-of-Persia-Sangamner")
console.log(anotherGame.split('-'))


