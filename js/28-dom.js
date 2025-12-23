'use strict'

//DOM Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}
// COnseguir elementos con un id concreto
//var caja = document.getElementById("micaja"); 
var caja = document.querySelector("#micaja");
caja.innerHTML = "Texto en la caja desde js";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "White";


// conseguir elemento por etiqueta 
var todoslosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement ("hr");

var valor;
for(valor in todoslosDivs){
    if(typeof todoslosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todoslosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);


//console.log(contenidoenTexto);


//Conseguir elementos por su clase 


//console.log(caja);