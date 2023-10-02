// String Conversion Operations (Important Topic)

let str1 = "Omkar" 
let str2 = " Jadhav" 
// console.log(str1 + str2) 

// // Interview Questions 
// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + "2") // 12
// console.log("1" + "2" + 2) // 122
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "3") // 33 

// bad code (confusing code/not properly readable) 
// console.log(+true) // 1
// console.log(true+) // error

// same 
let num1, num2, num3 
num1 = num2 = num3 = 2 * 2 

// Posfix and Prefix Increment and Decrement 
// Increment 
let gameCounter1 = 100
// ++gameCounter // prefix: increment then assign 
let gameCounter2 = gameCounter1++ // postfix: assign then increment 
console.log(gameCounter1) // 101 
console.log(gameCounter2) // 100 

// Decrement 
let lifeCounter = 20 
// postdecrement 
// let deathCounter = lifeCounter--  // assign then decrement 

// predecrement  
let deathCounter = --lifeCounter // decrement then assign
console.log(lifeCounter) // 19 
console.log(deathCounter) // 19 
