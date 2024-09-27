const ps = require("prompt-sync");

const prompt = ps();

let ringTimes = Number(prompt('Mitu poialpoissi tahab ouna (0-7): '))

const min = 1
const max = 2
function randomAppleCount() {
    return Math.round(Math.random() * (max - min) + min);
}

const maxApples = 14
let currentApples = 0

for (let step = 0; step < ringTimes; step++) {
    let rand = randomAppleCount()
    currentApples += rand
    console.log(rand)
}

console.log('Lumivalgekesele jai: ' + (maxApples - currentApples))

