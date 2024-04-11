// rest parameters = (...rest) allow a function work with ta variable
//                   number of arguements by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

// function openFridge(...foods) {
//     console.log(foods);
// }
// function getFood(...foods) {
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hotdog";
// const food3 = "pasta";

// // openFridge(food1, food2, food3);

// const foods = getFood(food1, food2, food3);

// console.log(foods);

// function sum(...numbers) {
    
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }

// // const total = sum(1, 2, 3, 4, 5);

// // console.log(`Your total is $${total}`);

// function getAverage(...numbers) {
    
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total)

// function combineStrings(...strings) {
//     return strings.join(" ");
// }


// const fullName = combineStrings("Mr.", "Patrick", "Star", "IV");

// console.log(fullName);