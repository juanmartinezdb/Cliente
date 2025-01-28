
//ejercicio 1
const obj2 = {
    nombre:'Nicolas'
}
function Extender2() {
    this.login= () => console.log('Iniciando sesión '+this.nombre);
    this.logout= () => console.log('Cerrando sesión '+this.nombre);
}
Extender2.call(obj2);
console.log(obj2);
obj2.login();
obj2.logout();

//Ejercicio 2
const obj = {
    nombre:'Nicolas'
}

function extender(o) {
    o.login =()=> console.log('logeando usuario '+o.nombre);
    o.logout =()=> console.log('cerrando sesión '+o.nombre); 
}
//metodo 2 
function extenderv2(o) {
    const metodos = {
        login() {
            console.log(('iniciando session', this.nombre));
        },
        logout() {
            console.log(('Cerrando session', this.nombre));
        },
    };
    return Object.assign(usuario, metodos);
}
extender(obj);
console.log(obj);
obj.login();
obj.logout();

//Ejercicio 3

function callback (fn,...rest) {
 fn(...rest);
}
function log ( ...args) {
    console.log(args);
    
}
callback(log, 1,2,3,4);

//Ejercicio 4
    function suma (fn, ...rest) {
        fn(rest.reduce((acc,elm)=> acc+elm));
        
    }
    suma (resultado => {
        console.log(resultado);
    }, 1, 2, 3, 4);

    //Ejercicio 5

    function ordenar(texto, fn) {
        let ordenado = texto.split(' ');
        ordenado = ordenado[0].concat(ordenado[1]);
        ordenado = ordenado.split('');
        ordenado.sort();
        ordenado = ordenado.join('');
        fn(ordenado);
    }

    ordenar('hola mundo', console.log);

    