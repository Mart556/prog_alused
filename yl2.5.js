const ps = require("prompt-sync");

const prompt = ps();

let fileSize = Number(prompt('Mis on faili suurus: '))
let fileTitle = prompt('Mis on faili pealkiri: ')
let attachedFile = prompt('Kas kirjaga on kaasas fail (Jah, Ei): ')

let isSpam = false

if (fileTitle ==  '' || fileSize > 1.0 && attachedFile == 'Jah') {
    isSpam = true
}

console.log(isSpam ? 'Kiri on spamm' : 'Kiri ei ole spamm')