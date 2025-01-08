//principios del POO 
/*
Encapsulacion -> agrupar metodos y props
Abstraccion -> esconder los detalles
Herencia 
Polimorfismo
*/
const x = {};
const proto =Object.getPrototypeOf(x);
console.log(proto);
console.log(proto.toString());

function User() {
    this.name = 'hola Mundo';
    this.login = function ( ) {
        console.log('iniciando sesion');
    }
}
const user1 = new User();
const user2 = new User();

user1.login();
console.log(user1.login==user2.login); //false
//porque se crea una funcion por cada usuario se esta reservando esa memoria donde se dirige.

function User2() {
    this.name = 'hola mundo2';
    //metodo de instancia
    this.logger = function(){
        console.log('loggeando...');
        
    }
}

//metodo de prototipo (codigo optimizado)
User2.prototype.login = function () {
    console.log('¡iniciando sesion!'+this.name);
        this.logger();
}
const user3 = new User2();
const user4 = new User2();
console.log(user3.login==user4.login); //true, es el login del proptotipo
console.log(user3.login());

//Iterando propiedades
for (prop in user3) { //en la cadena solo llega al objeto y su prototipo
    console.log(prop);    
}

for (let prop in user3) {
    if(!user3.hasOwnProperty(prop))
        console.log(prop);    //login no es de la "propiedad personal" del objeto
}
console.log(Object.keys(user3));

//extender prototipos
//esta forma es una catetatada y puede dar muchos fallos
//NO SE DEBE EXTENDER NINGUN OBJETO NATIVO DE JAVASCRIPT COMO OBJETCT
Object.prototype.isEqual = function (obj) {
    //...evaluamos si es igual...
}
let x2 = {};
x.isEqual({name:'objeto random'});

//IMPLEMENTANDO HERENCIA CON PROTOTIPOS 
function Entidad () {}
Entidad.prototype.save = function () {
        console.log('guardando', this.name);
    }
Entidad.prototype.validate = function () {
        console.log('validando', this.name);
    }


function Usuario () {
    this.name = 'Hola Mundo';
}
function Producto () {
    this.name = 'Producto';
}
//FORMA ANTIGUA
// Usuario.prototype = Object.create(Entidad.prototype);
// // Usuario.prototype=Entidad.prototype;
// Usuario.prototype.constructor = Usuario;

//FORMA NUEVA 
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Producto.prototype, Entidad.prototype);

const usuario1 = new Usuario();
console.log(usuario1);

//CONSTRUCTOR PADRE 
function Entidad1 (entidad, broma='jaja') {
    this.id = Math.random().toString('20');
    this.entidad = entidad;
    this.broma = broma;
}

function Usuario2() {
    Entidad1.call(this, 'Usuario', 'haha'); //contexto de this, parametros
    this.atributos = {
        name: 'ablito',
        email: 'pepe@fas.io'
    }
} 
const u = new Usuario2();
console.log(u);

//Override
 User.prototype.save = function() { //"sobreescribe el metodo del prototipo"
    console.log('guardando desde user...');
 }
 const ur = new User();
 ur.save();
 const pr = new Producto();
 pr.save();

//POLIMORFISMO 
  function Select () {}
Select.prototype.render = function () {
    console.log('renderizando select');
    
}

    function Checkbox () {}
Checkbox.prototype.render = function () {
    console.log('renderizando checkbox');   

}
let componentes =  [ new Select(), new Checkbox()];
componentes.forEach(c => c.render());

//MIXINS
function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args);
}
//con la funcion mixin (le damos ese nombre porque queremos) podriamos
//hacer en lugar de Object.assign(loquesea.prototype, vuela, canta, nada);
// mixin(loquesea, vuela, canta, nada) al final es lo mismo;
let vuela = {
    vuela() {
        console.log('vuela');
        
    }
}
let nada = {
    nada() {
        console.log('nadando');
        
    }
}
let camina = {
    camina() {
        console.log('caminando');
        
    }
}
let caga = {
    caga() {
        console.log('llendo al baño');
        
    }
}
//vuela, nada, camina, va al baño
function Pato () {
    this.name = 'Patito';
}
Object.assign(Pato.prototype, nada, caga, vuela, camina);

//camina, va al baño
function Perro () {}
Object.assign(Perro.prototype, caga, camina);

//nada, va al baño
function Pez () {}
Object.assign(Pez.prototype, nada, caga);
//vuela
function Avion () {
}
Object.assign(Avion.prototype, vuela);
console.log(Avion.prototype, new Avion());
console.log(Pez.prototype, new Pez());
console.log(Perro.prototype, new Perro());
console.log(Pato.prototype, new Pato());




