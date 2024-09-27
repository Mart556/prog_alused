const ps = require("prompt-sync");

const prompt = ps();

const seatType = {
    ['aken']: 'Aknaalune',
    ['muu']: 'Vahekaigukoht'
}

var finalMessage = ''

let chooseType = prompt('Kas soovite istekohta valida ise ("ise") voi looida ("loos"): ')

if (chooseType == "ise") {
    let seat = prompt('Millis kohta soovite valida ("aken") voi muu ("muu"): ')
    finalMessage = 'Valisite ise! ' + seatType[seat]
} else if (chooseType == "loos") {
    let randomSeat = Math.random() > 0.5 ? 'aken' : 'muu'
    finalMessage = 'Istekoht loositi! ' + seatType[randomSeat]
} else {  
    finalMessage = 'Viga!'
}

console.log(finalMessage)