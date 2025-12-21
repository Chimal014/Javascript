'use strict'
var categoria = ['Accion', 'Terror', 'Comedia'];
var pelis = ['amor', 'romance', 'triller', 'ciencia ficcion'];
var tiempo = ['2 horas', '1 hora y media', '30 minutos'];
var cine = [categoria, pelis, tiempo];

// console.log(cine[0][1][1]);
var elemento = prompt("introduce tu pelicula a la cartelera: ");

while(elemento != "ACABAR"){
    pelis.push(elemento);
    elemento = prompt("Introduce tu pelicula: ");
}
console.log(pelis);
document.write("<ul>"+ "<li>" + pelis + "</li>");


// busquedas dentro de un array  
/*
var busqueda = pelis.find(function(peliculas){
    return peliculas == "amor";
}); */

var busqueda = pelis.find(peliculas => peliculas == "amor");
console.log(busqueda);