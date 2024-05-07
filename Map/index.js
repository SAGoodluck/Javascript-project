// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);


// function square(element) {
//     return Math.pow(element, 2);
// }

// function cube(element) {
//     return Math.pow(element, 3);
// }

// const students = ["Ash", "Brock", "Gary", "Misty"];
// // const studentsUpper = students.map(upperCase);
// const studentslower = students.map(lowerCase);

// // console.log(studentsUpper);
// console.log(studentslower);

// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }

const dates = ["2024-2-24", "2016-09-22", "2020-11-28", "1969-4-20"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}