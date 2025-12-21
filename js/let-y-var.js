'use strict'
// pruebas let y var 

var numero = 40;
console.log(numero); // valor debe ser  40

if(true){
    var numero = 50;
    console.log(numero); // valor debe ser  50
}
console.log(numero); // valor debe ser 50 de new 


//PRUEBA CON LET

var texto = "curso JS CHIMAL";
console.log(texto);

if(true){
    let texto = "curso JS VICTOR";
    console.log(texto);
}

console.log(texto);
