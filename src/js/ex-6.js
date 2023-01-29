alert("<----EJERCICIO 6---->");

let number1 = prompt("insert the first number");
let number2 = prompt("insert the second number");
let number3 = prompt("insert the third number");

console.log(bignumber(number1, number2, number3));

function bignumber(n1, n2, n3){

    if (n1>n2 && n1>n3){
        return n1;
    }

    if (n2>n1 && n2>n3){
        return n2;
    }
        
    if (n3>n1 && n3>n2){
        return n3;
    }
}
