'use strict'
//switch

var edad = 33;
var imprime = " ";

switch(edad){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40 juas juas";
    break;
    case 75:
        imprime = "eres ya un anciano";
    break;
    default:
        imprime = "tu edad es neutral";
    break;
}

console.log(imprime);