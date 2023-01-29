alert("<----EJERCICIO 9---->");

// const phrase = prompt("write phrase here");

ex9();

function ex9() {
  let counter = 0;

  for (let index = 0; index < phrase.length; index++) {
    if (phrase[index].toLocaleLowerCase() === "a" || phrase[index].toLocaleLowerCase() === "e" || phrase[index].toLocaleLowerCase() === "i" || phrase[index].toLocaleLowerCase() === "o" || phrase[index].toLocaleLowerCase() === "u") {
      counter += 1;
    } 
  }
  console.log(counter);
}

