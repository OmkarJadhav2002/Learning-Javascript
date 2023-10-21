// Number and Maths in JS 

// ------------------------ Numbers --------------------------
const score = 12 
console.log(score)
console.log(typeof(score))

// defining new object which is of number type 
const balance = new Number(100) 
console.log(balance)
console.log(typeof(balance))

const num1 = 898.879 
console.log(num1.toFixed())
console.log(num1.toPrecision(4))

const num2 = 100000
console.log(num2.toLocaleString('en-IN'))


// --------------------------- Maths ----------------------------- 
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.2))
console.log(Math.ceil(5.3)) // round of next greater integer value 
console.log(Math.floor(4.5)) // round of to previous integer value 
console.log(Math.random()*10)