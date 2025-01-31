// a recursive function isEven Corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    return isEven(n-2);
}

// Test it on 50 and 75. See how it bhaves of -1. Why? Can you thinkk of a way to fix this?
console.log(isEven(50));
console.log(isEven(75));
