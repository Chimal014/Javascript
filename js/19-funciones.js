'use strict'
// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones 
function calculadora(numero1, numero2, mostrar = false){
    if(mostrar == false){
    console.log("Suma: " + (numero1+numero2) + "</br>");
    console.log("Resta: " + (numero1-numero2)+ "</br>");
    console.log("Multiplicacion: " + (numero1*numero2)+ "</br>");
    console.log("Division: " + (numero1/numero2)+ "</br>");
    console.log("********************************");
    }else{
    document.write("Suma: " + (numero1+numero2)+ "</br>");
    document.write("Resta: " + (numero1-numero2)+ "</br>");
    document.write("Multiplicacion: " + (numero1*numero2)+ "</br>");
    document.write("Division: " + (numero1/numero2)+ "</br>");
    document.write("********************************");
    }  
    return "Hola soy la calculadora"
}

calculadora(1, 5);
calculadora(2, 8, true);

/*
// Invocar o llamar a la funcion
for(var i = 1; i <= 20; i++ ){
    console.log(i);
    calculadora(i, 8);
}
*/