//DECLARACION DE FUNCIONES

console.log(suma);//aunque se declare despues se puede llamar antes
//console.log(resta); //no se puede acceder porque no esta, 
//esto se conoce como Hoisting -> Izar una bandera.


//Declaracion de funciones: Function Declaration

//funcion nombrada--> Named fuction
function suma() {
    console.log('sumando...');
    
}

//Funcion anonima --> Annonymous function
// function () {
//     console.log('funcion anonima');
    
// }

//Expresion de funciones -> function expression
let resta = function () { //Annonymous function expressions
    console.log('restando');
}

const multiplica = function multi () { //named function expression
    console.log('multiplicando');    
}

const divide = () => { //siempre va a ser anonima
    console.log('dividiendo');
}

//HOISTING 
function saludo() {};// la 'iza' al principio. y la guarda en el objeto windows
let hola = 'hola';
const chao = 'chao';

//ARGUMENTS

function suma (a,b) {
    return a+b;
}
console.log(suma());// undefinded + undefinded
console.log(suma(3));// 3 + undefinded
console.log(suma(1,2,3,4,5,)); //1+2

function sumados(a,b) {
    console.log(arguments); //arguments es un objeto no un array!
    let total = 0;
    for (let valor of arguments) {
        total+=valor;
    }
    return total;
 
}
console.log(sumados(1,2,3,4,5,6));

function sumatres (a,b) {
    return Array.from(arguments)
    .reduce((acc, el)=> acc+el);
}
console.log(sumatres(1,2,3,4,5,6));

//FAT ARROW FUNCTION OJO!
//no tienen arguments
//no tienen this
//no tienen super

// let sumacuatro = (a,b) => {
//     return Array.from(arguments) //NO TIENEN ARGUMENTS
//     .reduce((acc, el)=> acc+el);
// }
// console.log(sumacuatro(1,2,3,4,5,6));

//REST 
function sumacinco (a,b, ...args) {
    console.log(args);
    
}
console.log(sumacinco(1,2,3,4,5,6));
let  sumaseis = (a,b, ...args) => {
    console.log(args);
    
}
console.log(sumacinco(1,2,3,4,5,6));

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}
logMsg('Servidor:', 'Error1', 'Peticion aceptada', 'socket activo');
let mensajes = ['Error1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente:', ...mensajes, 'Otro error');

//parametros predeterminados

const config = {
    url: 'https://holamundo.io',
    bucket: 'amazon S3',
    direccion: {
        calle: 'hola',
        numero: 80,
    },
    port: 80,
}
function configurarAPI(url='https://holamundo.io') {
    return `${url}`;
}
function configurarAPI2({url} = {url: 'por defecto'}) {
    return `${url}`;
}
function configurarAPI3(url,bucket=1145 ,port=80) {
    return `${url}/${bucket}/${port}`;
}
console.log(configurarAPI('https://chaomundo.io'));
console.log(configurarAPI());
console.log(configurarAPI2());
console.log(configurarAPI3('holamundo.io','145',80));

//PARAM DESTRUCTURING

const config2 =  ['holamundo.com', 145, 80,];
function webserver4(conf) {
    const {bucket, ...rest} = conf;
    console.log(rest);
    
    return bucket;
}

function webserver(config) {
    // const url= config.url;
    const {url} = config;
    return url;
};
function webserver2({url}) {
    return url;
}
function webserver3({url, direccion:{calle}}) {
    console.log(calle);
    
    return url;
}
console.log(webserver(config));
console.log(webserver2(config));
console.log(webserver3(config));
console.log(config2);

console.log('cUATRO'+webserver4(config));

//getters and setters

const usuario = {
    nombre: 'chantito',
    apellido: 'feliz',
    nombreCompleto: function () {
        return usuario.nombre +' '+usuario.apellido;
    },
    get nombreEntero() {
        return this.nombre+' '+this.apellido
    },
    set nombreEntero (valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};
console.log(usuario.nombre +' '+ usuario.apellido);
console.log(usuario.nombreCompleto());
console.log(usuario.nombreEntero);
console.log(usuario.nombreEntero);

//EXCEPCIONES TRY-CATCH

function sumarTodo(arr) {
    //solucion 
    if (!Array.isArray(arr)){
        throw new Error('el parametro no es un array')
    }
    return arr.reduce((acc, elem) => {
        if (typeof elem !== 'number' || Number.isNaN(elem)){
            throw new Error ('Elemento '+elem+' no es un numero')
        }
        return acc+ elem;
    });

}
console.log(sumarTodo([1,2,3,4,5]));
try {
    console.log(sumarTodo({prop:1}));//fallara porque tiene algo que no es
} catch (e) {
    console.log(e.message);
}
console.log('holiwis');
//SENTRY.IO lugar donde se pueden redireccionar los errores
//REVISAR SWEETALERT2.GITHUB.IO con fallos bonitos de mostrar

//THIS 
//hace referencia a un objeto si se usa en un objeto
//si se encuentra en una funcion hace referencia al objeto window, y en node global
//new hace referencia al oobjeto que sera creado

const user = {
    name : 'Nicolas',
    login() {
        console.log(this);
    }
};
user.login();
user.logout = function logout () {
    console.log(this);
    
}
user.logout();//hace lo mismo que login, lanza el objeto donde se define

function log() { //sale global/windows dependiendo de si es live o node
    console.log(this);
}
log(); //como uso node me sale global

function log2(mensaje) { //es como un constructor
    this.mensaje= mensaje;
    this.lolailo = 'lerele';
    console.log(this);
    
};
//cuando usamos NEW, se crea un objeto literal
//se vicula este objeto a this
//se vincula el prototipo
//si no retorna nada, entonces retorna this.
const lerele = new log2('hola mundo');

//CONTEXTO DE THIS
    const usuario2 = {
        nombre:'Nicolas',
        ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
        mostrarCiudadanias() {
            this.ciudadanias.forEach(c=> console.log(this.nombre+' '+c));
        },
    };
    usuario2.mostrarCiudadanias();

    //COMO CAMBIAR EL CONTEXTO DE THIS (ESTO ES VIEJUNO MEJOR USAR ARROW FUNCTIONS)

    function saludar(...rest) {
        console.log(this, rest);

    }
    saludar.call({propiedad: 'hola mundo'}, 1, 5);
    saludar.apply({propiedad: 'hola mundo'},[ 1, 5]); //los args van con una array y no sueltos
    let nuevoSaludar = saludar.bind({propiedad: 'hola mundo'});
    nuevoSaludar(1,5);
    saludar.bind({propiedad: 'hola mundo'},( 3, 5)); //se mandan como parametros de funcion
    
    (function saludar2(...rest) {
        console.log(this, rest);
    }).bind({propiedad: 'hola mundo'})(1,2);

    const usuario3 = {
        nombre:'Nicolas',
        ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
        mostrarCiudadanias() {
            this.ciudadanias.forEach( function (c) {
                console.log(this.nombre+' '+c);
            }, this); //algunas funiones como forEach permiten definir al final el contexto de This
        },
    };
    usuario3.mostrarCiudadanias();