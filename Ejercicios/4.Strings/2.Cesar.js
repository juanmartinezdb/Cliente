function nextChar(cadena){
 let salida='';
    for (let i=0 ;i<cadena.length;i++ ){
        salida+= String.fromCharCode(cadena.charCodeAt(i)+1);
 }
 return salida;

}
console.log(nextChar('Hola'));


// let str = 'Hi';
// console.log(str[0]);
// str = 'h'+str[1];
// console.log(str[0]);
// str[0] = 'J'; //no funciona
// console.log(str[0]);


