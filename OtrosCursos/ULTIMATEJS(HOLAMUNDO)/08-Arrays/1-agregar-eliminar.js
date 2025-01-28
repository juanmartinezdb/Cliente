const letras = ['a', 'b'];

//push (final)
//unshift (principio)
letras.push('c', 'd');
letras.unshift('y','z');
console.log(letras);

//pop 
//shift
letras.shift();
letras.pop();
console.log(letras);

//splice (inicio (2), remove (0), lo que vamos añadiendo)
letras.splice(2,0, '1', '2');
console.log(letras);
letras.splice(2,2); //eliminamos esos dos en medio
console.log(letras);

//BUSCAR PRIMITIVOS
console.log(letras.indexOf('c'));
console.log(letras.indexOf(1)); //-1 no esta
console.log(letras.indexOf(1,5 )); //buscaria 1 pero desde el 5 elemento, si hay antes no lo cuenta
console.log(letras.lastIndexOf('c')); //si hubiera mas nos devuelve el ultimo

console.log(letras.includes('c')); //boolean si o no

// fat arrow functions 
function hola() {
    return "hola mundo";
}

const hola2 = mensaje => "hola " + mensaje;

console.log(hola(), hola2('kokorok'));

// buscar referencia

const usuarios = [
{id: 1, name:'pepe'},
{id: 2, name:'luisa'},
{id: 3, name:'lor'},
{id: 4, name:'kaka'},
]

const resultado = usuarios.find(function(usuario){
    return usuario.id == 1;
});

const resultado2 = usuarios.find (u => u.id==2);

console.log(resultado, resultado2);

//vaciando arrays

// let arr = [1,2,3,4];
// arr = [];

let arr = [1,2];
let arr2 =  arr;
arr = [];
console.log(arr, arr2);

let arr3 = [1,2];
arr.length = 0; // mejor forma de vaciar

let arr4 = [3,4];
arr.splice(0, arr.length); //2º mejor forma de vaciar

//combinando arrays y dividir arrays

let combinado = arr3.concat(arr4);
console.log(combinado);
let dividios = combinado.slice(1,3);
console.log(dividios);

//spread operator

let array1 = [1,'dos'];
let array2 = [5,6];

let array3 = [0, ...array1, 3, 4, ...array2, 7, 8];
console.log(array3);
let array4 = [...array3];
array3.pop();
console.log(array3, array4);

//join - split

let nombres = ['pepe', 'francisco', 'mariadolores'];
let mensaje = nombres.join(', ');
console.log(mensaje);

let dividido = mensaje.split(', ');
console.log(dividido);
let [p, f, m] = mensaje.split(', ');
console.log(p, f, m);

// ordenando arrays

    let numeros = [15, 10, -10];
numeros.sort();
console.log(numeros);
numeros.sort().reverse();
console.log(numeros);
 letras.sort();
 console.log(letras);

 let letrasconMaysculas = ['Z', 'a', 'b','x', 'c', 'z']
letrasconMaysculas.sort((a,b) => {
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();

    if (alower< blower){
        return -1;
    } 
    if (alower> blower){
        return 1;
    }
    return 0;
});
console.log(letrasconMaysculas);

let usuarios2 = [
    {edad:15, nombre:'pepe'},
    {edad:22, nombre:'jose'},
    {edad:18, nombre:'francisco'},
    {edad: 20, nombre:'eduardo'},
];
usuarios2.sort((a,b)=> a.edad-b.edad);
console.log(usuarios2);

//every and some

let usuarios3 = [
    {id: 1, activo: true},
    {id: 2, activo: false},
    {id: 3, activo: false},
    {id: 4, activo: true},
];

let todosactivos = usuarios3.every(u=> { 
    console.log('todos activos', u.id); //entrara mientas no encuentre un falso
    return u.activo;
});
console.log(todosactivos);

let algunactivo = usuarios3.some(u=> {
    console.log(u.id); //entra hasta que encuentra un true
    
    return u.activo;
});
console.log(algunactivo);

//filter

const mayores = usuarios2.filter(u => u.edad>=18);
console.log(mayores);

// map

const lista = usuarios2.map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`
console.log(html);

const mapped = usuarios2.map(u=> {
    return {
        ...u,
        mayor: u.edad>17,
    }
});
// OJO! equivale a:
const mapped2 = usuarios2.map(u=> ({
        ...u,
        mayor: u.edad>17,
}));
console.log(mapped);
console.log(mapped2);

// ENCADENANDO

const lista2 = usuarios2
        .filter(u => u.edad>=18)
        .map(u=> u.nombre);

console.log(lista2);

//Reduce

    const suma = numeros.reduce((ac, num)=> ac+num, 0);
    console.log(numeros);
    
    console.log(suma);

const anidado = [[1,2], 3, [4,5]];
//queremos aplanarlos a 1, 2, 3, 4, 5;
const plano = anidado.reduce((ac, num)=> ac.concat(num),[]);
console.log(plano);

//crear un indice
//crea un indice 
    const indexado = usuarios2.reduce((acc, elem) => ({
        ...acc, //mete el acumulado
        [elem.nombre]: elem, //le suma el elemento 
    }), {});  

    console.log(indexado);
    

 







