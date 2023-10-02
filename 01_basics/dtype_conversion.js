// let score = "34" // 34 (number)
// let score = "43abc" // NaN
// let score = null // 0 
// let score // NaN (typeof(NaN): number)
let score = true // 1 false: 0 

console.log(typeof score) 
console.log(typeof(score)) 

let valueNumber = Number(score) 
console.log(typeof valueNumber) 
console.log(valueNumber) 

// important points (interview point of view)
console.log(typeof NaN) // number

// Boolean Type Conversion 
let isLoggedIn = 1 
let booleanLoggedIn = Boolean(isLoggedIn) 
console.log(typeof booleanLoggedIn)
console.log(booleanLoggedIn) // converted to `true` 

// String Type Conversion 
let emptyString = "" 
let convertEmptyString = String(emptyString) 
console.log(typeof emptyString) 
console.log(typeof convertEmptyString) 
console.log(emptyString) // blank space
console.log(convertEmptyString) // blank space 