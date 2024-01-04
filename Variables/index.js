// variable = A container that stores a value
//            Behaves as if it were the value it contain

// 1. declaration  let x;
// 2. assignment   x = 100;

// can not be the same name
let x;
x = 100;

// combined 
let y = 123;

let age1 = 25 
let price = 10.99;
let gpa = 2.1; 

// logs to inspect / console
console.log(x);

console.log(typeof gpa);
console.log(`You are ${age1} years old`);
console.log(`the price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

// strings

let firstName = "Steve";
let favouriteFood = "Pasta";
let email = "best@gmail.com"

console.log(firstName);
console.log(`Your name is: ${firstName}`);
console.log(`Your favourite food is: ${favouriteFood}`);
console.log(`Your email is: ${email}`);


// Booleans
let online = false;
let forSale = true;
let student = true;

console.log(typeof online)
console.log(`Steve is ${online}`);
console.log(` Is this car for sale: ${forSale}`);
console.log(` Enrolled ${student}`);

let fullName = "Steve Goodluck";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = ` Your name is ${fullName}`;
document.getElementById("p2").textContent = ` You are ${age} years old`;
document.getElementById("p3").textContent = ` Enrolled ${isStudent}`;