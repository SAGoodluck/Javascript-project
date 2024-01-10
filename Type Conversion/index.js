// type conversion = change the datatype of value to another (string numbers booleans)

/*
    string -> numbers
    string -> booleans
    numbers -> string
    boolean -> strings
    booleans -> numbers
*/

/*
// get a string and turn it into a number.
let age = window.prompt("how old are you");
age = Number(age);
age += 1;

console.log(age);
*/


let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);