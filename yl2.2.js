const ps = require("prompt-sync");

const prompt = ps();

let userName = prompt("Sisestage Leedu perenimi: ")


    if (userName.slice(-2) == "ne")   {
        console.log("Abielus")
    } else if (userName.slice(-2) == "te") {
        console.log("Vallaline")
    } else if (userName.slice(-1) == "e") {
        console.log("Määramata")
    } else {
        console.log("Ei ole  Leedu perekonnanimi!")
    }