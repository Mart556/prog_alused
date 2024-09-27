const ps = require("prompt-sync");

const prompt = ps();

var userName = prompt('Sisestage oma nimi: ');
var userSpeed = Number(prompt('Mis on teie kiirus? '));
var allowedSpeed = Number(prompt('Mis on lubatud kiirus? '));

console.log(userSpeed, allowedSpeed, (userSpeed - allowedSpeed) * 3)

const maxFine = 190;

if (userSpeed < allowedSpeed ) {userSpeed = allowedSpeed}

var fineAmount = Math.max(0, Math.min(Math.round((userSpeed - allowedSpeed) * 3), maxFine));

    console.log(fineAmount)

console.log(userName + ", kiiruse ületamise eest on teie trahv " + fineAmount + " eurot.")