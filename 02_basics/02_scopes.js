
// `{}` with function or conditional statements: scope 

// global scoped 
var sample = 20;
let y = 20;

if(true){
    // block scoped 
    var x = 10;
    let y = 200;
    const z = 30;

    // console.log("Inner/Block scoped y: ", y)
}

// console.log("Outer/Global scoped y: ", y)

// console.log(x);  (global scoped)
// console.log(y); // error (function scoped) 
// console.log(z); // error (function scoped)

function outer(){
    const a = 10;

    function inner(){
        const b = 20;
        console.log(a);  // here a inner function can access the global variables 
    }
 
    // console.log(b); // scope concept is applied here and we will get the error 

    inner()
}

// outer()



// important and interesting example 
// console.log(addOne(1))  // here error does not occur
function addOne(num1){
    return num1+1;
}

console.log(addOne(1)) 

// console.log(res(2)) // error occur as the we cannot access the variables before assignement
const res = function addTwo(num1){
    return num1+2;
}

console.log(res(2))





