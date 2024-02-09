// string slicing = creating a substring from a
//                  portion of another string

//                  string.slice(start, end)

// const fullName = "Steve Goodluck";

// // let firstName = fullName.slice(0, 3);
// // let lastName = firstName.slice(7, 14);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" "));
// console.log(firstName);
// console.log(lastName);

const email = "Steve@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);