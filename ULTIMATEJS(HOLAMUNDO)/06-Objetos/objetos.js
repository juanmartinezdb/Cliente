let user = {
    email:'asdf@gmail.com',
    name: 'pepe',
    direccion : {
        calle: 'falsa',
        numero : 3
    },
    activo: true, 
    recuperarClave: function (){
        console.log('Recuperando clave...');
    }
};

//2.DINAMICO aunque sea constante, constante es la referencia(el espacio de memoria).
const user2 = {id:1, name: 'Pepe'};
user2.name = 'paco';
user2.guarda = function(){
    console.log('Guardando', user2.name);
}

user2.guarda();
delete user2.guardar;
console.log(user2);

const user3 = Object.freeze({id:33}); //ya no se puede cambiar porque freeze
user3.name = 'Pepe';
user3.id = 2 //aunque yo lo cambia suda tres pueblos y deja 33 pero no peta
console.log(user3);

//para fijar las propiedades pero que puedas cambiar el contenido en lugar de
//freeze hay que usar SEAL
const user1 = Object.seal({id:1});
user1.name= 'fredo';
user1.id =2 //y te deja cambiarla
console.log(user1);

//3. Factory functions
let usuario = {
    email:'asdf@gmail.com',
    name: 'pepe',
    direccion : {
        calle: 'falsa',
        numero : 3
    },
    activo: true, 
    recuperarClave: function (){
        console.log('Recuperando clave...');
    }
};

function crearUsuario(name, email, calle, numero){
    return {
        email, //esto es lo mismo que poner email : email
        name,
        direccion : {
            calle,
            numero
        },
        activo: true, 
        recuperarClave: function (){
            console.log('Recuperando clave...');
        }
    };
}
let usuario1 = crearUsuario('pepe@gmail.com', 'pepe', "valpino",6);
let usuario2 = crearUsuario('perico@gmail.com', 'perico', "Encina",6);

//4.CONSTRUCTORES

function Empleado() {
    this.id =1;
    this.recuperarClave = function (){
        console.log('recuperando clave...');
    }
}
let empleado = new Empleado();
console.log(empleado);

//5.atajos

let obj = {};
//let obj1 = new Object {};
/*
    new Array(); []
    new String();''
    new Number(); 1
    new Boolean(); true
    ojo! si miramos el typeof nos va a decir que son object
    */
let empl = new Empleado();
console.log(empl.constructor);

const s1 = '1+1';
const s2 = new String ('1+1');
console.log(s1===s2); //false String vs Object
console.log(s1==s2); 

//6. Funciones objetos
    function Usuario(nombre){
        this.nombre= nombre;
    }
    console.log(Usuario.name); //nombre
    console.log(Usuario.length); //parametros

    function of(Fn, arg){ //podemos pasar funciones como argumento, y las podemos retornar!
        return new Fn(arg);
    }
    let ususer1 =of(Usuario, 'pepe');

        function returned(){
            return function(){
                console.log('hola mundo');
            }
        }
let saludo = returned();
saludo();

//7.Function

function Punto (x,y) {
    this.x =x;
    this.y = y;
    this.dibujar = function(){console.log('dibujando...');  }    
}
 //FORMA ANTIGUA DE HACER LAS COSAS
const Point = new Function ('x','y', `
        this.x =x;
    this.y = y;
    this.dibujar = function(){console.log('dibujando...');  }    
    `);

    const p = new Point(1,2);
    console.log(p);
     // mejor asi
     let punto = {z: 7};
     Punto.call(punto, 1,2); //con esto vamos a poder extender funciones, aumentamos los parametros que le pasamos.
    Punto.apply(punto,[2,3]); //hace lo mismo que call, pero los argumentos se pasan como un array. 

    //9.listar propiedades
    const pruto = {
        x:10,
        y:15,
        dibujar(){
            console.log('dibujando')
        }
    };
    if ('dibujar' in punto){ //si existe una propiedad llamada 'dibujar' en punto
    pruto.dibujar();
    }
 //Object.keys(pruto) nos devuelve un array con las claves valor del objeto
 //FORMA ANTIGUA
    console.log(Object.keys(pruto));
 for ( llave of Object.keys(pruto)){
    console.log(llave, punto[llave]);
 }

 for (entry of Object.entries(pruto)){
    console.log(entry) //los pares llave valor.
 }
 //FORMA NUEVA
for (llave in punto){
    console.log(llave, punto[llave]);
}

//10 Clonando objetos
    let susto = {
        x:1,
        y:15
    };
 //forma viejuna
    Object.assign(susto, {z:20});
    console.log(susto);
    let clonSusto = Object.assign({}, susto); //array vacio, mas lo que añadimos.
    let clonSusto2 = Object.assign({}, susto, {z:43, x:11}); //array vacio, mas el array, mas el añadido. (lo de la derecha siempre gana)
    console.log(clonSusto);
    console.log(clonSusto2);

//forma nueva Spread
    let clonSusto3 = {...susto};
    console.log(clonSusto3);

//Math
    console.log(
        Math.PI, //saca el numerito pi
        Math.abs(-15), //valor absoluto
        Math.round(15.5), //redondea
        Math.floor(1.5), //redondea hacia abajo
        Math.ceil(1.5), //redonda hacia arriba
        Math.pow(2,3), //potencia
        Math.sqrt(9), //devuelve la raiz
        Math.random() //numero random entre 0-1
    ) 

//Date
 const ahora = new Date(); //fecha actual de la maquina
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 30); //año, mes, dia, hora, minutos, segundos, milisegundos...
const fecha3 = new Date(1986, 11, 25, 14+15, 30); //nos imprime al dia siguiente al ser hora "29"

console.log('datestring  '+ fecha3.toDateString()); //formato corto sencillo
console.log('ISOstring  '+ fecha3.toISOString()); //este es el formato que se usa para enviar fechas por servidor
console.log('TimeString  '+ fecha3.toTimeString()); //hora y uso

fecha3.getDate() //los .get nos van a dar lo que queramos de la fecha en este caso es fecha.
fecha3.setDate() // los .set podemos modificiar el campo que queramos en este caso es el Date.

//String

const salutacion = "Hola Mundo!";

console.log(salutacion.length);
console.log(salutacion.indexOf("Mu")); //dice el indice del primer caracter
console.log(salutacion.includes("M")); //true o false si está
console.log(salutacion.toLowerCase()); //y toUpperCase
console.log(salutacion.substring(0,4)); // inicio y fin para el substring
let salutacion2 =salutacion.replace("Mundo","Planeto"); //lo cambia pero hay que guardarlo en un sitio

const espacios = "   Hola     Mundo   ";
espacios.trimStart(); //para controlar los espacios
espacios.trimEnd();
espacios.trim();

//Caracteres de escape

/*
\n nueva linea
\t tabulacion
\' 
\"
\\
*/ 

//Template Strings
const nombrito = 'lerele'
const sall = `hola mundo! ${nombrito} 
se ha quedado buena tarde`

//lo bueno es que se pueden usar como plantilla y hacerla una funcion
function plantilla (nombrito){
    return `Hola ${nombrito}!`
}
console.log(plantilla('Pepe'));
