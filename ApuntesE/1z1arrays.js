//Arrays

const lista = [1, 2, 3, 4, 5, 6, 7];

let listaDoble = lista.map(e => e * 2);//e es cada elemento

console.log(listaDoble);

listaDoble = lista.map(e => {
    let numero = e * 2;
    return numero + 8;
});

console.log(listaDoble);

console.log(lista.filter(e => e > 3));
//OJO A LOS FALSYS!!! 
console.log(lista.filter(e => e % 2));//nos da los impares
console.log(lista.filter(e => !(e % 2)));//nos da los pares 

const listaResult = lista.filter(e => {
    if (e % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(listaResult);
//find
let found = lista.find(e => e > 2);
console.log(lista.find(e => e > 2));
console.log(typeof (found));

//findindex
let encontrado = lista.findIndex(e => e > 2);
console.log(encontrado, typeof encontrado);

//indexof
let encontrado2 = lista.indexOf(e => e > 2);//no lo encuentra porque es una funcion
//busca la funcion no lo que pide la funcion, ergo no lo encuentra
console.log(encontrado2, typeof encontrado2);
encontrado2 = lista.indexOf(4);
console.log(encontrado2, typeof encontrado2);

//foreach usa cada elemento pero no genera nada nuevo, ni array nuevo , ni elemento ni nada

//reduce
//va a tomar todos los elementos y los va a reducir en uno, por ejemplo sumar.
const array1 = [1, 2, 3, 4];
const initialValue = 0; //es el acumulador inicial, NO POR DONDE EMPIEZA
const sumWithInitial = array1.reduce(
    (accumulator, current) => accumulator + current, initialValue);
// 0 (initialValue) + 1 + 2 + 3 + 4
const sumWithout = array1.reduce((ac,e)=>ac+e);
console.log(sumWithInitial); //la suma da 10
console.log(sumWithout); //la suma da 10
