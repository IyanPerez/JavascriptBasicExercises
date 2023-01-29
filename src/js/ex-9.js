// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

const phrase = prompt("write phrase here");

function result() {
  let counter = 0;

  for (let index = 0; index < phrase.length; index++) {
    if ((phrase[index].toLocaleLowerCase() === "a" || phrase[index].toLocaleLowerCase() === "e" || phrase[index].toLocaleLowerCase() === "i" || phrase[index].toLocaleLowerCase() === "o" || phrase[index].toLocaleLowerCase() === "u")) {
      counter += 1;
    } else {
      console.log("no vowel");
    }
  }
  console.log(counter);
}

result();
