// function = A section of reusable code
//            Declare code once, use it whenever you want
//            Call the function to execute that code

// function happyBirthday(username, age) {
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday to ${username}`);
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Pupoff", 35);
// happyBirthday("Rick", 50);

function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function isEven(number) {
    
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    } 
    // short version //
    
    // return number % 2 === 0 ? true : false; //
}
function isValidEmail(email) {
    
    if (email.includes("@")) {
        return true;
    }
    else {
        return false
    }
    // short version //

    // return email.includes("@") ? true : false;

}

console.log(isValidEmail("Pup@on.com"));