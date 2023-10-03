// Two types of memory 
// 1. Stack 
// 2. Heap 

/*
for `primitive` datatypes they get the memory in stack (you get the copy here)
*/
let myName = "Omkar"
let anotherName = myName 
anotherName = "Omi"

console.log(myName) 
console.log(anotherName) 

/* `Non-primitive` dtypes get the memory in heap.
When you try to access the value from the heap memory, you get the reference.
Hence if you modify/change the value, the changes will reflect in the original value which is in heap memory.
*/
let userOne = {
    email: "omkar@gmail.com" 
}

let userTwo = userOne
userTwo.email = "omi@gmail.com"
console.log(userOne.email) 
console.log(userTwo.email) 