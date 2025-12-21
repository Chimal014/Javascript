'use strict'

/* 
1.- Pida 6 numeros por pantalla y los meta en un arrays 
2.- mostrar el array entero con cada elemento en el cuerpo de la pagina y en consola
3.- ordenar el array y mostrarlo 
4.- invertir su orden y mostrarlo
5.- mostrar cuantos elementos tiene el array
6.- busqueda de un valor introsucido por el usuario que diga si encuentra el array y su indice 

*/

function mostrarArray(elementos, custom = ""){
    document.write("<h1>Contenido del array"+ custom +"</h1>");
    document.write("<ul>");

    elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>")
    });

    document.write("</ul>");
}

//  1.-
//var numeros = new Array (6);
var numeros = [];

for(var i = 0; i <= 5; i++){
    //numeros[i] = parseInt(prompt("Introduce un numero entero: ", 0));
    numeros.push(parseInt(prompt("Introduce un numero entero: ", 0))); 
}
//   2.- Mostrar el array por la consola y en cuerpo de la pagina
console.log("Paso2.- ");
console.log(numeros);
mostrarArray(numeros, " Paso 2.- mostar en el cuerpo de la pagina");

//    3.- ordenarlo y mostrarlo
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, " Estos son los numeros ya ordenados: ");

//    4.- Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, " Invertidos");

//    5.- Cuantos elementos tiene un array
document.write("<h1> El array tiene " + numeros.length + " elementos");

//    6.- Busqueda de valor introducido por el usuario
var busqueda = parseInt(prompt("Busca un numero ", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){
document.write("<h1> Encontrado!! posicion de la busqueda:" + posicion + "</h1>");
}else{
    document.write("<h1> No encontrado </h1>");
}
