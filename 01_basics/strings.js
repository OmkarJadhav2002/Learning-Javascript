// Strings in JS 

const name = "Omkar" 
const repoCount = 15 

// console.log(name + repoCount) // outdated syntax 

// Another way: string interpolation, use back ticks with $ sign followed by {}
// more readable, reliable, mordern way 
console.log(`My name is ${name}. I have created about ${repoCount} repositories on gitgub.`) 

// another syntax to define the string 
const carName = new String("Porsche Macan")
console.log(carName) 
console.log(carName[1]) 
console.log(carName.length)
console.log(carName.toUpperCase()) 
console.log(carName.charAt(2)) 
console.log(carName.indexOf('o')) 