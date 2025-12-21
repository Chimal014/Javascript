'use strict'
 
//Arryas, arreglos y matrices

var nombre = "Bruno chimal" ;
var nombres = ["BRUNO", "BLANCA", "AMBAR", "ALEX", "JUAN", "NAVA"];

var lenguajes = new Array ("PHP", "C#", "JAVA", "C++", "ENSAMBLADOR", "GO");

document.write("<h1>Lenguajes de programacion: </h1>");
document.write("<ul>");
    /*
    for(var i=0; i < lenguajes.length; i++){
        document.write ("<li>"+ lenguajes[i]+ "</li>");
    }
    */

    lenguajes.forEach((elemento, indice, arr)=>{
        console.log(arr);
        document.write ("<li>"+ indice + " - " + elemento+ "</li>");
    });
document.write("</ul>");