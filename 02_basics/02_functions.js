
function sayMyName(){
    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R"); 
}

// sayMyName  // this is the reference to that function 
// sayMyName() // to call the function you have to give the parenthesis

function userlogin(username){
    // if(username === undefined){
    //     console.log("Please enter the name."); 
    //     return;
    // }

    // good practice/professinal code 😎
    if(!username){
        console.log("Please enter the name."); 
        return;
    }

    return `${username} just logged in.`;
}

// console.log(userlogin()) // here we get the output as 'undefined', so check that in the function and proceed accordingly


// Functions with objects and arrays 
function calculateCartPrice(...num1){
    // return num1;  // this will only returns the first value (without using ...(rest operator/spread operator))
    return num1; // we will get all the values in the array when we use rest operator
}

// console.log(calculateCartPrice(100, 200, 400))

// interview question 
function calculateTotal(price1, price2, ...remaining){
    return remaining;
}

// console.log(calculateTotal(100, 300, 500, 400, 1000))

// Functions with objects 
const userDetail = {
    name: "Omkar",
    age: 21
}

function displayDetail(user){
    return `${user.name} is ${user.age} years old.`;
}

// console.log(displayDetail(userDetail))

// Functions with arrays 
const array = [2, 35, 5, 12]

function arrayElements(anyArray){
    return anyArray[2];
}

console.log(arrayElements(array))






