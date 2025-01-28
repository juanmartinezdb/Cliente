//para ejecutar el contenido usaremos: node notas.js

/*las variables en javascript son*/

let number = 6;
let string = "texto";
let boolean = true;
let array = [1,4,5,6,"a", "b", "abc", false];
let persona =  {
    nombre: "Pepe",
    apellidos: ["Fernandez", "Perez"]
};
let variableFuncion = () => {}; //esta usando una lambda para declararla.

let variableSinDeclarar;
console.log(persona.hasOwnProperty("nombre"));
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof persona);
console.log(typeof variableSinDeclarar);


console.log(number, string, boolean, array, persona);

//------------------------------//
let hoy = new Date(); //numero de segundos desde 1 de enero de 1970
console.log(hoy);
if (true){
    let hoy = "viernes";
    console.log(hoy);
}
console.log("al concatenera fuerzo a to string "+hoy);
console.log("pero si los separo con una coma se mantiene ", hoy);
console.log(hoy.getTime()); //nos da el numero almacenado para esa hora.

//------------------------------------------------//
//LOS OBJETOS SE SUELEN DECLARAR COMO CONST
const  employee = {
    name:"jon",
    age: 30
}

const salary = 1000;
employee.city = "Málaga";
console.log(employee);
const employee2 = employee;
console.log(employee2);