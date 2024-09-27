const ps = require("prompt-sync");

const prompt = ps();

let ringTimes = Number(prompt('Mitu ringi labisid: '))

let totalCarrots = 0
let addAmount = 0
let step = 0

console.log(ringTimes)

for (step; (step + 1) < ringTimes; step += 2) {
    totalCarrots += (addAmount += 2)
}

console.log('Kokku porgandeid: ' + totalCarrots)