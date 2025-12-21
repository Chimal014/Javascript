'use strict'

/*
Programa que  pida dos numeros y que nos diga cual es el mayor el menor y si son iguales 
*/

var number1 = parseInt(prompt("ingresa el primer numero a comparar"));
var number2 = parseInt(prompt("ingresa el segundo numero a comparar numero a comparar"));



while(number1 <= 0 || number2 <=0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt("ingresa el primer numero a comparar", 1));
    number2 = parseInt(prompt("ingresa el segundo numero a comparar", 1));
}

if(number1 == number2){
    alert("los numeros son iguales");
}else if(number1 > number2){
    alert("el numero mayor es: " + number1);
    alert("el numero menor es: " + number2);
}else if(number2 > number1){
    alert("el numero mayor es: " + number2);
    alert("el numero menor es: " + number1);
}else{
    alert("introduce numeros enteros y correctos");
}

