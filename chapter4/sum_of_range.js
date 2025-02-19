// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end. 

/*
function range(start, end) {
    let array = [];
    for (let i = start; i < end + 1; i++) {
        array.push(i); 
    }
    return array;
}
*/

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function sum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

function range(start, end, step = 1) {
    let array = [];
    
    if (step > 0) {
        for (let i = start; i < end + 1; i += step) {
            array.push(i);
        } 
    } else {
        for (let i = start; i > end - 1; i += step) {
            array.push(i);
        }
    }
    return array;
}

console.log(sum(range(1, 10)));
