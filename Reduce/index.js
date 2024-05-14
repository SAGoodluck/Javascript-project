// .reduce() = reduce the elements of an array
//             to a single value

// const prices = [5, 25, 12, 15, 30];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//     return accumulator + element;
// }

const grades = [75, 55, 72, 93, 84, 68];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
 
console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}
