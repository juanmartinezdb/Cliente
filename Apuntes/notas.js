
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

//REST PARAMETER

function createPerson(nameA,surnameB, ...cities){
    const person = {};
    person.name = nameA;
    person.surname = surnameB;
    person.locations = cities;
    cities.forEach(c=> console.log(c));
}
createPerson('Nick','Anderson', 'Malaga','Sevilla','Madrid');


///
const agenda = [];

cons tagenda = document.forms.agendaForm;

document.getElementById("btnAdd").addEventListener("click") , ()=> {

    
}
const nombre = fagenda.txtNombre.value.trim();
const apellidos = fagenda.txtApellidos.value.trim();
const telefono = fagenda.txtTelefono.value.trim();
const dato = fagenda.inlineRadioOptions.value;

//Crear un objeto mucho mas breve y sencilla que ir campo por campo!
const contacto = {usuario, nombre, apellidos, telefonos, dato};
agenda.push(contacto); 

showAgenda();
resetForm();
