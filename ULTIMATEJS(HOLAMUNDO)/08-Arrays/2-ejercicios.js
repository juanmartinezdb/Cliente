//ejercicio 1
const paraAbsoluto = (arr) => arr.map(i => Math.abs(i));

const ns = [-1, 2, 3, -15];
const absolutos = paraAbsoluto(ns);
console.log(absolutos);

//ejercicio 2

const miArray = ["hola", 12, "mundo", {}, { id: 15 }, ['lala'],];

const divxTipo = a => {
    //numero, string, objetos
    let n = {
        numeros: [],
        objects: [],
        strings: [],

    };
    for (i of a) {
        if (typeof i == 'number') {
            n.numeros.push(i);
        } else if (typeof i == 'string') {
            n.strings.push(i);
        } else if (typeof i == 'object') {
            n.objects.push(i);
        }
    }
    return n;
};

const divxTipo2 = (a) => {
    return {
        numeros: a.filter(n => typeof n == 'number'),
        strings: a.filter(s => typeof s == 'string'),
        objects: a.filter(o => typeof o == 'object'),
    }
}

const nuevoArray = divxTipo(miArray);
const nuevoArray2 = divxTipo2(miArray);
console.log(nuevoArray);
console.log(nuevoArray2);

//ejercicio 3

const usuarios = [
    { edad: 17, nombre: 'pepe', plan: 'premium' },
    { edad: 13, nombre: 'pepita', plan: 'premium' },
    { edad: 32, nombre: 'rufina', plan: 'free' },
    { edad: 25, nombre: 'calisto', plan: 'gold' },
];

const getPaidUsers = (usrs) => usuarios.filter(u => u.plan != 'free');
console.log(getPaidUsers(usuarios));

//ejercicio 4

const cuantosPremiun = (usrs) => usrs.filter(u => u.plan != "free").length;
const cuantosMayores = (usrs) => usrs.filter(u => u.edad >= 18).length;

const cuantosPremiun2 = (usrs) =>
    usrs.reduce((acc, el) =>
        el.plan != 'free' ? acc + 1 : acc, 0);

const cuantosMayores2 = (usrs) =>
    usrs.reduce((acc, el) =>
        el.edad >= 18 ? acc + 1 : acc, 0);

console.log(cuantosPremiun(usuarios));
console.log(cuantosPremiun2(usuarios));
console.log(cuantosMayores(usuarios));
console.log(cuantosMayores2(usuarios));

//ejercicio 5

const obtenerMayor = (ar) =>
    ar.reduce((acc, elm) =>
        elm.edad > acc.edad ? elm : acc, { edad: 0 });

const obtenerMayor2 = (ar) => {
    let mayor = ar[0];
    for (i of ar) {
        if (i.edad > mayor.edad) {
            mayor = i;
        }
    }
    return mayor;
}
const mayor = obtenerMayor(usuarios);
const mayor2 = obtenerMayor2(usuarios);
console.log(mayor);
console.log(mayor2);

//ejercicio 6

const dividexTipo = (arr) => {
    return arr.reduce((acc, elem) => {
        let llave = typeof elem;

        acc[llave] = acc[llave] ? acc[llave] : [];//para comprobar si existe si existe lo deja tal cual, si no crea el array para ir añadiendo
        acc[llave].push(elem);
        return acc;
    }, {});
};

const divxtipofEach = (arr) => {
    let div = {};
    arr.forEach(e => {
        let llave = typeof e;
        div[llave] = div[llave] ? div[llave] : [];
        div[llave].push(e);
    });
    return div;
}

const miArray2 = ["hola", 12, true, "mundo", {}, { id: 15 }, ['lala'],];
let divididosxTipo = dividexTipo(miArray2);
let divididosxTipo2 = divxtipofEach(miArray2);
console.log(divididosxTipo);
console.log(divididosxTipo2);

// Ejercicio 7

const groupBy = (arr, prop) => {
    let r = {};
    arr.forEach(u => {
        let n = u[prop];
        if (!Object.keys(r).includes(n)) {
            r[n] = [];
        }
        r[n].push(u);
    }
    )
    return r;
}
const groupByReduce = (arr, prop) => {
    return arr.reduce((acc, elem) => {
        let n = elem[prop];
        acc[n] = acc[n] ? acc[n] : [];
        acc[n].push(elem);
        return acc;
    }, {});
};
console.log(usuarios);

const grouped = groupBy(usuarios, 'plan');
const groupede = groupByReduce(usuarios, 'plan');
console.log(grouped);
console.log(groupede);

//ejercico 8

const listarHtml = (usrs) =>
    `<ul>
    ${usrs.filter(u => u.plan != 'free')
        .sort((a, b) => a.edad - b.edad)
        .map(u => `<li>${u.nombre}</li>`)
        .join(`
        `)}
    </ul>`;
console.log(listarHtml(usuarios));

//ejercicio 9
const users = [
    { age: 12, name: 'Xera', membership: 'premium' },
    { age: 18, name: 'Tifany', membership: 'free' },
    { age: 23, name: 'Rita', membership: 'free' },
    { age: 45, name: 'Rachel', membership: 'gold' },
];

const unificar = (a1, a2) => {
    const a3 = [...a1];
    const keys = Object.keys(a1[0]);
    const keys2 = Object.keys(a2[0]);
    console.log(keys);
    
    for (i of a2) {
        let obj = {};        
        obj[keys[0]] = i[keys2[0]];
        obj[keys[1]] = i[keys2[1]];
        obj[keys[2]] = i[keys2[2]];
        a3.push(obj);
    }
    return a3;
};
console.log(unificar(usuarios,users));
 
//solucion 2
const userEspanol = users.map(u => ({
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
}));

const unificado = [...usuarios, ...userEspanol];
console.log(unificado);

const userEspanol2 = users.map(u => {
    let usp= {
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
    };
    return usp;
});

