const ps = require("prompt-sync");

const prompt = ps();

let temperatuur = prompt("Sisetage õhutemperatuur: ")

if (temperatuur <= 4) {
    console.log("On jäätumisoht!")
} else {
    console.log("Ei ole jäätumisohtu!")
}