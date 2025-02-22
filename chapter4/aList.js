// Write a function arrayToList that builds up a list structure like the one shown when give [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first delement) or undefined when there is no such element. If you haven't already, also write a recrusive version of nth.

//class node {
//    let value = null;
//    let rest = null; 
//    function node (value, rest) {
//        this.value = value;
//        this.rest = rest;
//    }
//}
//
//class list {
//    head = null;
//    function list(node) {
//        this.head = node 
//    }
//}

function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >=0; i--) {
        list  = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = []
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(node, n) { 
    if (node === null) return undefined;
    if (n === 0) return node.value;
    return nth(node.rest, n - 1);
}

/*
function nth(node, n) {
    if (node === null) return undefined;
    let count = 0;
    while (node !== null) {
        if (count === n) return node.value;
        count += 1;
        node = node.rest
    }
    return undefined;
}
*/

// Dummy data.
let arr = [1,2,3];
let list = arrayToList(arr);
console.log("List generated after calling arrayToList function: ", list);
let newArr = listToArray(list);
console.log("Array generated after calling listToArray function: ", newArr);

console.log(list);
let newList = prepend(0, list);
console.log(newList);

let indexValue = nth(newList, 2);
console.log(indexValue);
