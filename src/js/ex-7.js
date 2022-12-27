const phrase = prompt("Write a phrase here please:");
let arrayCounter = []

for (let index = 0; index < phrase.length; index++) {
        
    if (phrase[index].toLocaleLowerCase() === "a") arrayCounter.push(index);
}

console.log(arrayCounter);



