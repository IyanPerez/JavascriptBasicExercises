alert("<----EJERCICIO 8---->");

// const phrase = prompt("write phrase here");

ex8();

function ex8() {
    for (let index = 0; index < phrase.length; index++) {
        if (phrase[index].toLocaleLowerCase() === "a" || phrase[index].toLocaleLowerCase() === "e" || phrase[index].toLocaleLowerCase() === "i" || phrase[index].toLocaleLowerCase() === "o" || phrase[index].toLocaleLowerCase() === "u") {
            console.log(phrase[index]);
        } 
    }
}

