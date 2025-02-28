// Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elemenets of the original arrays.

// Dummy data.
let arrayOfArrays = [['cat'], ['dog', 'wolf'], ['turtle', 'frog']];


let result = arrayOfArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

// Test output.
console.log(result);
