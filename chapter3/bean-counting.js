function countBs (bean) {
    let b = countChar(bean, 'B');
    return(b);
}


const countChar = (strVar, charVar) => {
    let count = 0; 
    for (let i = 0; i < strVar.length; i++) {
        if (strVar[i].toLowerCase() == charVar.toLowerCase()) {
            count++;
        }
    }
    return count
};

let bean = "Big Bean Burrito";
console.log(bean);
console.log("B count: " + countBs(bean));

let bean2 = "Giant burrito";
console.log(bean2);
console.log("B count: " + countBs(bean2));
