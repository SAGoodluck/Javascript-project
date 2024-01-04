// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = html textbox

let username;

// username = window.prompt("What's your username ");

console.log(username);

// 2.

document.getElementById("mySubmit").onclick = function() { // when clicked submit
    username = document.getElementById("myText").value; // get the value of myText 
    document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(username); // show result to console
}