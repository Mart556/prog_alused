const ps = require("prompt-sync");

const prompt = ps();

let userAge = prompt("Sisestage oma vanus: ")
let userGender = prompt("Sisestage oma sugu (M või m) (N või n): ")
let trainingType = Number(prompt("Sistage treeningu tyyp (1, 2, 3): "))


const maxMenPulse = Math.round(220 - userAge);
const maxFemalePulse = Math.round(206 - ((userAge * 88 ) / 100))

console.log(maxFemalePulse, maxMenPulse)

const trainingTypes = [
    null,
    {min: 50, max: 70},
    {min: 70, max: 80},
    {min: 80, max: 87}
]

let isMale = userGender == "M" || userGender == "m"

console.log(isMale, trainingTypes[trainingType].min, trainingTypes[trainingType].max)

function getMinPulsePercent() {
    return Math.round((trainingTypes[trainingType].min * (isMale ? maxMenPulse : maxFemalePulse)) / 100)
}

function getMaxPulsePercent() {
    return Math.round((trainingTypes[trainingType].max * (isMale ? maxMenPulse : maxFemalePulse)) / 100)
}


console.log('Pulsisagedus peaks olema vahemikus ' + getMinPulsePercent() + ' - ' + getMaxPulsePercent())