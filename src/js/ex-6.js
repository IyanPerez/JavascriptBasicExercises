let num1 = prompt("insert the first number");
let num2 = prompt("insert the second number");
let num3 = prompt("insert the third number");

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

document.write(bignumber(num1, num2, num3));