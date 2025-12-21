'use strict'

/*calculadora que 
pida dos numeros por pantalla
si metemos mal los numeros volver a introducir
mostrar en el cuerpo de la pagina en un alert y por la consola el resultados de sumar restar y multiplicar y dividir esas dos cifras */

var numero1 = parseInt(prompt("Introduce el primer numero", 0)); //declaracion de variables
var numero2 = parseInt(prompt("Introduce el segundo numero", 0)); // declaracion de variables

while(numero1 < 0 ||  numero2 < 0 || isNaN (numero1) || isNaN (numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero", 0)); //declaracion de variables
    numero2 = parseInt(prompt("Introduce el segundo numero", 0)); // declaracion de variables
}

var resultado = "la suma es: "+ (numero1 + numero2)+ "</br>" +
                "la resta es: "+ (numero1 - numero2)+ "</br>"+
                "la multiplicacion es: "+ (numero1 * numero2)+ "</br>"+
                "la division es: "+ (numero1 / numero2)+ "</br>"
                
var resultado2 = "la suma es: "+ (numero1 + numero2)+ "\n" +
                "la resta es: "+ (numero1 - numero2)+ "\n"+
                "la multiplicacion es: "+ (numero1 * numero2)+ "\n"+
                "la division es: "+ (numero1 / numero2)+ "\n"
document.write(resultado);
alert(resultado2)
console.log(resultado2);