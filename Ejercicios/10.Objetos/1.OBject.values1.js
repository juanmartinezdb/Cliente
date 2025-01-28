const salaries =  {
"John":100,
"Pete":300,
"Mary":250,
};

//Object values
const cantidades = Object.values(salaries);
const total = cantidades.reduce((a,b) => a+b ,0);
console.log(cantidades,"total: ", total, "numero de propiedades:",cantidades.length);

//Objet values + For of
let resultado = 0;
let propiedades = 0;
for (cantidad of cantidades) {
    resultado+=cantidad;
    propiedades++; 
}
console.log("total: ",resultado,"numero de propiedades: ",propiedades);