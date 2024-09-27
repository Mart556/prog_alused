const ps = require("prompt-sync");

const prompt = ps();

let ringTimes = Number(prompt('Mitu korda veertad: '))

const min = 1
const max = 6
function randomDiceNumber() {
    return Math.round(Math.random() * (max - min) + min);
}

for (let step = 0; step < ringTimes; step++) {
    console.log(randomDiceNumber());
}

