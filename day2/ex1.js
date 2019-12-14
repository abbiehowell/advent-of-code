#!/usr/bin/env node

const fs = require('fs');
let input = fs.readFileSync('day2/input.txt').toString().split(",").map(it => parseInt(it));

input[1] = 12;
input[2] = 2;

for (i = 0; i < input.length; i += 4) {
    const instruction = input[i];
    if (instruction === 99) break;
    const pos1 = input[i+1];
    const pos2 = input[i+2];
    const outputPos = input[i+3]
    switch(instruction) {
        case 1:
            input[outputPos] = input[pos1] + input[pos2];
            break;
        case 2:
            input[outputPos] = input[pos1] * input[pos2];
            break;
    }
}

console.log(input[0]);