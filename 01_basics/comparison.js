// Comparisong of Datatypes 

console.log(2 > true) // 1
console.log(false > true) // false
console.log("2" > false) // true
console.log("2" > 1) // true  
console.log("2" >= "2") // true 

/*
NOTE: related to null comparison 

comparison convert null to a number, treating it as `0`. 
*/

// null 
// avoid this type of comparisons 
console.log(null > 0) // false
console.log(null == 0) // false 
console.log(null >= 0) // true 

// undefined 
// avoid this type of comparisons 
console.log(undefined > 0) // false 
console.log(undefined == 0)  // false 
console.log(undefined >= 0) // false 

// === (strict check: this check the datatype also) 
console.log("Omkar" == "Omkar") // true
console.log("2" === 2) // false
console.log("2" === "2") // true 
