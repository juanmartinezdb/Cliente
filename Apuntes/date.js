
//hora actual
let now = new Date();

//para indicar una fecha esta es una forma
let dia = new Date("2017-1-16");

//nos da los milisegundos desde el 1 de enero de 1970 hasta la fecha
// esto puede valer para almacenarla en un momento como numero
let millis = Date.parse(dia);
console.log(millis);

//los meses empiezan en 0

dia.setMonth(dia.getMonth()+1); //nos suma un mes
dia.setFullYear(dia.getFullYear()+1); //nos suma un año

console.log(dia.getDay()) //nos da el dia de la semana
// 0 el domingo y 6 el sabado
console.log(dia.getMonth()) //nos da el mes

// Sustituir a un switch

const week = {
    "0": "domingo",
    "1": "lunes",
    "2": "martes",
    "3": "miercoles",
    "4": "jueves",
    "5": "viernes",
    "6": "sabado"
};
console.log(week[dia.getDay()]);
