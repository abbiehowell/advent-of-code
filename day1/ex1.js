#!/usr/bin/env node

const fs = require('fs');
let modulesMasses = fs.readFileSync('day1/input.txt').toString().split("\n");

const totalMass = modulesMasses.reduce((acc, curr) => {
    return acc + (Math.floor(parseInt(curr) / 3) - 2);
}, 0)

console.log(totalMass);