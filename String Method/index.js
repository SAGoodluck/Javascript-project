// string methods = allow you to manipulate and work with text (strings)

// let userName = "SteveG";

// userName.charAt(0) // know the letter of the index
// console.log(userName.charAt(0));

// userName.indexOf(0) // know what number is the index
// console.log(userName.indexOf("v"));

// console.log(userName.lastIndexOf("e")); // if there is more than one of the same letter

// console.log(userName.length); // to know the length of a string

// let userName = "SteveG";
// userName = userName.trim(); will trim any white space in the string
// console.log(userName);

// let userName = "SteveG";
// userName = userName.toUpperCase(); will make all the characters uppercase
// console.log(userName);

// let userName = "SteveG";
// userName = userName.toLowerCase(); will make all the characters lowercase
// console.log(userName);

// let userName = "SteveG";
// userName = userName.repeat(); will repeat the string with to the amount in the brackets
// console.log(userName);

// let userName = "SteveG";
// let result = userName.startsWith(``); is boolean and will check to see if the varible starts with what is in the bracket
// console.log(result);

// let userName = "  SteveG";
// let result = userName.startsWith(" ");

// if(result){
//     console.log("Your username can't begin with ' '");
// }
// else {
//     console.log(userName);
// }
    
// let userName = "SteveG   ";
// let result = userName.endsWith(" ");

// if(result){
//     console.log("Your username can't end with ' '");
// }
// else {
//     console.log(userName);
// }

// let userName = "Steve G";
// let result = userName.includes(" ");

// if(result){
//     console.log("Your username can't include ' '");
// }
// else {
//     console.log(userName);
// }

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", ""); // replace what you want to remove from the string

// console.log(phoneNumber);

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padStart(15, "0"); // will add more characters to the start of the string. first number(15) is how many  to add and second("0") is what is  to the string

// console.log(phoneNumber);

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padEnd(15, "0"); // will add more characters to the end of the string. first number(15) is how many  to add and second("0") is what is added to the string

// console.log(phoneNumber);