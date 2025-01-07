function Usuario(name) {
this.name = name;
this.id = Math.random();
};

let user = new Usuario('Felipe');
let user2 = new Usuario ('Chanchito');
console.log(user, user2);

//ejercicio 2

const createUsuario = (name) =>{
    return {
        id : Math.random(),
        name,
    };    
};
let user3 = createUsuario('pepeluis');
let user4 = createUsuario('pepeluisa');

console.log(user3, user4);

//ejercicio 3
const similares = (obj1, obj2)=> {
    let distintos = false;
    for (key in obj1){
        if ( obj1[key] !== obj2[key]){
            distintos = true;
        }
        }
        return !distintos;
    }


let resultado = similares (
    {id:1, name:'nicol'},
    {id:1, name:'nico'},
);
console.log(resultado);

// ejercicio 4

let objeto = {
 id: 1,
 name : "pepelu",
 login : function (){},
 logout : function (){},

}
const cualesMetodos = (obj) => {
    for (key in obj) {
        if (typeof obj[key] == 'function'){
            console.log(key);
            
        }
    }
};
cualesMetodos(objeto);

// ejercicio 5

let objeto2 = {
    id: 1,
    name : "pepelu",
    login : function (){},
    logout : function (){},
   
   }
   const tienePropiedad = (obj, propiedad) => {
    if (Object.keys(obj).includes(propiedad)){
        return true;
    };
    return false;

    //    for (key in obj) {
    //        if (key == propiedad){
    //         return true;               
    //        }
    //    }
    //    return false;
   };
   console.log(tienePropiedad(objeto2, 'namse'));
   
   // ejercicio 6
   let obj1 = {id:1, name:'res', code:123};

   const crearCopia = (obj) => {
    let obj2 ={};

    for (key in obj) {
        obj2[key]= obj[key];
    }
    return obj2;
   };
   let obj2 = crearCopia(obj1);
   console.log(obj1, obj2);
   
   
   // ejercicio 7

let obj3 = {name: "nicolas"};
const agergarId = (obj) => {
  if (typeof obj == 'object'){
      obj.id = Math.random();
  }
}
agergarId(obj3);
console.log(obj3);

//

