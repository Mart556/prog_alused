const ps = require("prompt-sync");

const prompt = ps();

let ringTimes = Number(prompt('Mitu korda kell tiriseb: '))

for (let step = 0; step < ringTimes; step++) {
    console.log("Touse ja sara");
}