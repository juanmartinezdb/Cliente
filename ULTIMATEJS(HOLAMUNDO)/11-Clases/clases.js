//LAS CLASES SON "AZUCAR SINTACTICA" ES DECIR, NO HAY CLASES COMO EN JAVA U OTROS LENGUAJES.

//FUNCION CONSTRUCTORA )(si se iza);
// function User(name) {
//     this.name = name;
//     this.instancia = function () {}
// }

// User.prototype.login = function () {
//     console.log('helouses'+this.name);
// }
//CLASE (no se iza);
class User {
    constructor(name) {
        this.name = name;
        this.instancia = function () { };
    }
    login() { //se agrega al prototipo, porque esta FUERA del constructor
        console.log('holiwises ' + this.name);
    }
    activo = true;
    logout = () => { //al asignar, lo mete dentro del objeto NO EN EL PROTOTIPO
        console.log(this.name + ' saliendo');

    }
}
const u = new User('pepeluis');
console.log(u);
u.login();

//miembros privados

// function User(a) {
//     let name =a;
//     this.getName = function() {return name;}
// }

class User2 {
    #name; //atributos o funciones privadas
    constructor(name) {
        this.#name = name;
    }
    #logger() {
        console.log('loggeando');
    }
    log() {
        this.#logger();
    }
    getName() { return this.#name }
}
const u2 = new User2('pepito');
console.log(u2.getName());
console.log(u2.log());

//metodos estaticos // getters and setters

class Restaurants {
    #timetable;
    constructor(name) {
        this.name = name;
    }

    get timetable() { return this.#timetable }

    set timetable(value) {
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Fecha inválidad');
        }
        this.#timetable = date;
    }

    static getRestaurant(id) {
        return new Restaurants('BBQ');
    }
}
const r = Restaurants.getRestaurant(12);

const arr = new Array();
Array.isArray(arr);

//Herencia y Override
class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }
    save() {
        console.log('save de Entidad');

    }
}
class User3 extends Entidad {
    constructor(name, id) {
        super(id);
        this.name = name;
    }
    save() {//para el Override simplemente se delcara en el hijo y ya esta.
        super.save();//pero podemos usar los metodos del padre con SUPER.
        console.log('save en usuario');

    }
}
const u3 = new User3('pepito3', 3);
console.log(u3);

//MIXINS
const Entidad4 = {
    save() {
        console.log('guarado en entidad');

    }
}
const Actualizar = {
    update() {
        console.log('Actualizando en Actualizar');

    }
}
class User4 {
    constructor(name) {
        this.name = name;
    }
    save() {
        console.log('guardando en usuario');
        
    }
}
const nuevoProto = Object.assign({},Entidad, Actualizar);
Object.setPrototypeOf(User4.prototype, nuevoProto);
const u4 = new User4('gerardito');
u4.save();