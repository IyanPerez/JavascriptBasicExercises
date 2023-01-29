// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

const phrase = prompt("write phrase here");

function result() {
    let count_a = 0;
    let count_e = 0;
    let count_i= 0;
    let count_o = 0;
    let count_u = 0;

    for (let index = 0; index < phrase.length; index++) {
        if (phrase[index].toLocaleLowerCase() === "a" ) {
            count_a += 1;
        }
        else if (phrase[index].toLocaleLowerCase() === "e"){
            count_e += 1;
        }  
        else if (phrase[index].toLocaleLowerCase() === "i"){
            count_i += 1;
        }  
        else if (phrase[index].toLocaleLowerCase() === "o"){
            count_o += 1;
        }  
        else if (phrase[index].toLocaleLowerCase() === "u"){
            count_u += 1;
        }  
    }
    console.log("La vocal 'A' ha aparecido: " + count_a + " veces");
    console.log("La vocal 'E' ha aparecido: " + count_e + " veces");
    console.log("La vocal 'I' ha aparecido: " + count_i + " veces");
    console.log("La vocal 'O' ha aparecido: " + count_o + " veces");
    console.log("La vocal 'U' ha aparecido: " + count_u + " veces");
}

result();