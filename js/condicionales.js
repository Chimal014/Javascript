'use strict'

// condifional if   si A es igual a B entonces has algo

var edad = 18;
var nombreUsuario = 'Bruno';

/* operadores relacionales
mayor >
menor <
mayor igual >=
menor igual <=
igual ==
distinto !=

*/

if(edad >= 18){
    console.log(nombreUsuario + " tiene " + edad + " años ");
}else{
    console.log(nombreUsuario + " tiene " + edad + " años, es menor de edad ");
}

/*operadores logicos 
AND (y) &&

OR (O)  || 

Negacion !

*/

var year = 2018;

//Negacion !
if(year != 2016){
    console.log("el año no es 2016, en verdad el ano es: "+ year);
}

//AND

if(year >= 2000 && year <= 2020){
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post moderna");
}

//OR

if(year == 2008 || year >= 2018 && year == 2028){
    console.log("el ano acaba en 8");
}else{
    console.log("Año no registrao");
}



