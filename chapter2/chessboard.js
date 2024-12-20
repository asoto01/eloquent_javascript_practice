let size = 8;
let board = '';

evenLine = '';
oddLine = '';  

parity = false;
subParity = false;

for (let i = 0; i < size; i++) {
    if (!subParity) {
        evenLine += ' ';
        subParity = true;
    } else {
        evenLine += '#';
        subParity = false;
    }
}

for (let i = 0; i < size; i++) {
    if (!subParity) {
        oddLine += '#';
        subParity = true;
    } else {
        oddLine += ' ';
        subParity = false;
    }
}

for (let i = 0; i < size/2; i++) {
    if (!parity) {
        board += evenLine + '\n';
        board += oddLine + '\n';  
        parity = true;
    } else {
        board += oddLine + '\n';
        board += evenLine + '\n';
    }
}

console.log(board)
