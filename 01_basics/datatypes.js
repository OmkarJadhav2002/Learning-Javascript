"use strict"; // treat all JS code as newer version 

// alert(3*3) // we are using nodejs, not browser (there is different syntax to use alert in nodejs) 

console.log(6+6); console.log("Omkar") // you destroyed code readability here 

let name = "Omkar" 
let age = 21;
let isloggedin = false 

// Datatypes in JS 
// number 
// bigint 
// string
// boolean: true/false 
// null: standalone value 
// undefined
// symbol: uniquness 
// object  

console.log(typeof("Omkar")) //string 
console.log(typeof undefined) // undefined
console.log(typeof null) // object 

// Datatypes (Interview Related) 
// Types of Datatypes 
/* 1. Primitive Datatypes 
   7 Types: String, Number, Boolean, null, undefined, Symbol, 
   BigInt  
*/


// Javascript is dynamically type of staticaly typed language?
// dynamically typed (you don't need to mention the datatype)
// const score = 100 
// let sample = false 

// How to declare symbol 
const id = Symbol("123") 
const anotherId = Symbol("123") 
console.log(id === anotherId) 

const bigNumber = 46713264876n
console.log(typeof bigNumber) // bigint 

/* 2. Non-primitive/Reference type Datatypes 
   Arrays, Objects, Functions
*/
// declairing arrays 
const array = ["G63", "Macan", "Urus", "Thar"] 

// declaring objects 
const object = {
   name: "Omkar",
   age: 21
}

// declaring function 
const myFunc = function(){
   console.log("Hello Duniya")
}

console.log(typeof myFunc)