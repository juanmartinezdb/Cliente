
//Funcion con lambda
let sum = (a, b) => a+b;

console.log(sum(2,3));
//Funcion con lambda de mas de una linea
let saludo = (name) =>{
    console.log("hola"+name);
}

// Funcion que se ejecuta en el momento y es anonima
(function(a,b) {
    return a+b;
})(2,3);


//FOR IN FOR OF
let list = [1,2,3,4,5,6,7,8];

for (let data in list){
    console.log(data);
}
console.log('----');
for (let data of list){
    console.log(list[data]);
}
console.log('----');
list.forEach(e=>console.log(`estos son los numeros ${e}`));

//formas de buscar en un html bien sea por id o por clase.
//console.log("texto...", document.getElementById("caja").value));
//console.log("texto...", document.querySelector(".caja").value));

// Any signfica cualquier tipo . 
