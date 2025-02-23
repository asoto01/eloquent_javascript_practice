// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properites are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.


function deepEqual(one, two) {       
    if (one === null && two === null) return true; // If both are null then they are equal.
    if (one === null || two === null) return false; // If one is null then they are not equal.
    // Primitive value comparision.
    if (typeof(one) !== 'object' || typeof(two) !== 'object')  {
        if (one === two) {
            return true;
        }
        return false;
    }
    // Checking if objects are equal.
    if (Object.keys(one).length !== Object.keys(two).length) return false; // Size check.
    return Object.keys(one).every(key => deepEqual(one[key], two[key])); // Value check.
}

// Dummy data.
let hello = 'hello';
let entertainer = true;

let contagious = { id: 1 , mosquito: true};
let contagiousTwo = {id: 1, skeeter: true};

let linkedList = { value: 1, next: { value: 2, next: null}};

let linkedListTwo = {value: 1, next: { value: 2, next: null}};

let linkedListImposter = {value: 1, next: {value: 2, next: "something"}};


console.log(deepEqual(hello, entertainer)); // false
console.log(deepEqual(contagious, contagiousTwo)); // false 
console.log(deepEqual(linkedList, linkedListTwo)); // true
console.log(deepEqual(linkedList, linkedListImposter)); // false
