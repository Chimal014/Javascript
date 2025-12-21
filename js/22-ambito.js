'use strict'

var texto = "Hola mundo soy una variuable global";
var numero = 12;
function holaMundo(texto){
    var hola_mundo = "texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}


holaMundo(texto);

//typeof sirve para ver que tipo de dato es en consola