#!/usr/bin/env node

const fs = require('fs');
const input = fs.readFileSync('day2/input.txt').toString().split(",").map(it => parseInt(it));

const program = (noun, verb) => {
    let memory = input.slice();
    memory[1] = noun;
    memory[2] = verb;
    for (i = 0; i < memory.length; i += 4) {
        const instruction = memory[i];
        // console.log(instruction);
        if (instruction === 99) break;
        const pos1 = memory[i + 1];
        const pos2 = memory[i + 2];
        const outputPos = memory[i + 3]
        switch(instruction) {
            case 1:
                memory[outputPos] = memory[pos1] + memory[pos2];
                break;
            case 2:
                memory[outputPos] = memory[pos1] * memory[pos2];
                break;
        }
    }
    return memory[0];
}

const getResult = () => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) { 
            const res = program(noun, verb);
            if (res === 19690720) {
                return (100 * noun + verb);
            }
        }
    }
}

console.log(getResult());