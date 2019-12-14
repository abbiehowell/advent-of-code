#!/usr/bin/env node

const fs = require('fs');
let modulesMasses = fs.readFileSync('day1/input.txt').toString().split("\n");

const totalMass = modulesMasses.reduce((acc, mass) => {
    let total = Math.floor(parseInt(mass) / 3) - 2;
    let current = total;
    while (true) {
        current = (Math.floor(current / 3) - 2);
        if (current > 0) {
            total += current;
        } else {
            break;
        }
    }
    return total + acc;
}, 0)

console.log(totalMass);