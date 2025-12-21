'use strict'

/*
hacer un prgrama que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("introduce el numero menor", 0));
var numero2 = parseInt(prompt("introduce el numero mayor", 0));

document.write("<h1> Del " + numero1 + " al " + numero2 + " estan estos numeros </h1>");
for(var i = numero1; i <= numero2; i++){
    document.write(i + " </br>");
} 