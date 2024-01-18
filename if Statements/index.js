// If Statements = if a condition is true, execute some code
//                 if not, do something else

// let age = 25;

// //
// if (age >= 18) {
//     console.log("You are old enough to enter this site"); // if you are over the age group condition will be met and run
// }
// else { // always us curly brackets for ELSE.
//     console.log("You must be 18+ to enter this site"); // if you are under the age group condition will not execute
// }

// let time = 14;

// if (time < 12) {
//     console.log("Good morning");
// }
// else {
//     console.log("Good afternoon");
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("You are a student");
// }
// else {
//     console.log("You are not a student");
// }

// let age = 18;
// let hasLicense = false;

// if (age >= 16) {
//     console.log("You are old enough to drive"); // if age is higher than 18 this runs

//     if (hasLicense) {
//         console.log("You have your license!"); // if hasLicense is TRUE this runs
//     }
//     else {
//         console.log("You do not have your license yet!"); // if hasLicense is FALSE this runs
//     }
// }
// else {
//     console.log("You must be 16+ to have a license"); // if age is lower than 18 this runs
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultELement = document.getElementById("resultELement");
let age = 0;

mySubmit.onclick = function () {


    age = myText.value;
    age = Number(age);
    
    if(age >= 100){ // if this condition is true this will run
        resultELement.textContent = `You are too old to enter this site`;
    }
    else if (age == 0) { // == is use for comparison
        resultELement.textContent = `You can't enter. You were just born`;
    }
    else if (age >= 18) { // if first condition is false this will run and will not run the ELSE statement
        resultELement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0) {
        resultELement.textContent = `Your age can't be below 0`;
    } // ELSE IF runs in the order of the code
    else {
        resultELement.textContent = `You must be 18+ to enter this site`;
    }
}