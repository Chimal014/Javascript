'use strict'
/*Decir si un numero es par o impar
ventana promtp
si un numero no es valido volver a pedir un numero
*/

var number = parseInt(prompt("Introduce un numero ", 0));
while(isNaN(number)){
    number = parseInt(prompt("Introduce un numero ", 0));
}if(number % 2 == 0){
    alert("Es un numero par");
}else{
    alert("Es numero Impar");
}