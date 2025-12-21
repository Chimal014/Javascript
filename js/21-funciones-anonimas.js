'use strict'
//Funciones anonimas no tienenn nokbre y se puede guardar en una variable y despues hacer un callback por ejemplo

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 8, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});

/* Las funciones flecha sirven para sintetizar en las fuinciones anonimas al momento de declarar lo anonimo en la flecha hace la funcion de quitar la palabra function y si tiene solo una variable tambien quitar el parentesis, si tiene mas variable si es necesario mantener el parentesis y despues la flecha */