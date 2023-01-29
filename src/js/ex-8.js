// Escribe un programa que pida una frase y escriba las vocales que aparecen

const phrase = prompt("write phrase here");


function result() {
    for (let index = 0; index < phrase.length; index++) {
        if ((phrase[index].toLocaleLowerCase() === "a" || phrase[index].toLocaleLowerCase() === "e" || phrase[index].toLocaleLowerCase() === "i" || phrase[index].toLocaleLowerCase() === "o" || phrase[index].toLocaleLowerCase() === "u")) {
            console.log(phrase[index]);
        } else console.log("no vowel");
    }
}

result();
