// Arrays also have an every method analogous to the some method. This method returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, predicate) {
    for (element of array) {
        if (predicate(element)) {
           continue; 
        } else {
            return false;
        }
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

// Dummy data.
let arr = [1,2,3,4,5];
let arr2 = [-1,-2,-3,-4,-5];
let arr3 = [1,2,3,4,-5];

// Test function.

console.log("Function call using loop and conditional.");

console.log(every(arr, n => n > 0));
console.log(every(arr2, n => n > 0));
console.log(every(arr3, n => n > 0));

console.log("Function call using some method within.");

console.log(every2(arr, n => n > 0));
console.log(every2(arr2, n => n > 0));
console.log(every2(arr3, n => n > 0));
