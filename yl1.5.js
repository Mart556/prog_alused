const ps = require("prompt-sync");

const prompt = ps();

var ainePunktid = Number(prompt('Sisestage ainepunktide arv: '));
var Nadalad = Number(prompt('Sisestage nädalate arv: '));

console.log(Math.round((ainePunktid * 26) / Nadalad))