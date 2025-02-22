// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you exepct to be useful in more situations? Which one runs faster?

// Dummy data.
let dummyData = [1,2,3,4,5];
let dummyDataTwo = [1,2,3,4];

function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// Test reverseArray using dummyData.
console.log(reverseArray(dummyData));
console.log(dummyData);

function reverseArrayInPlace(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        let temp = arr[last];
        arr[last] = arr[first];
        arr[first] = temp;
        first++;
        last--;  
    } 
    return arr;
}

// Test reverseArrayInPlace using dummyData.
console.log(reverseArrayInPlace(dummyData));
console.log(reverseArrayInPlace(dummyDataTwo));
console.log(dummyData);
