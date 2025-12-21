'use strict'
// Parametros REST  y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_todas_frutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Demas frutas: "+ resto_de_todas_frutas)
}

listadoFrutas("Mandarina", "Sandia", " Papaya", " Pera", " Mango");
 