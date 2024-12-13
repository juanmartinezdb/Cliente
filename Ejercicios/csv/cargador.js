let csvToArrayCuerpo =(csv, separador=",") =>{
    let filas = csv.split('\n');

  
    filas.shift();
    console.log(filas);
    
    filas= filas.map(f =>f.split(separador));
    console.log(filas);    
    return filas;
};

let csvToArrayCabecera = (csv, separador=",")=> {
    let filas = csv.split("\n");
    let cabecera = filas[0].split(separador);
    console.log(cabecera);
    
    return cabecera;
}

let filas = csvToArrayCuerpo(csv);
let cabecera = csvToArrayCabecera(csv);

let rellenarTabla = (filas, cabecera) =>{
    const cabeza = document.querySelector("#cabeza");
    for (let item of cabecera){
        let fila = document.createElement("th");
        fila.textContent=item;
        cabeza.appendChild(fila);
    } 
     const cuerpo =document.querySelector("#cuerpo");
     for (let item of filas){
        let fila = document.createElement("tr");
        cuerpo.appendChild(fila);
        item.forEach(e => {
            const tr = document.createElement("td");
            tr.textContent=e;
            fila.appendChild(tr);
        });
     } 
}
rellenarTabla (filas, cabecera);






//  let csvToArray = (csv, separador=",") => {
//     let filas = csv.split("\n");

//     let cabecera = filas[0].split(separador);

// console.log(cabecera);
//      for (let item of cabecera){
//         document.querySelector("#cabeza").innerHTML +="<td>"+item+"</td>";
//      } 
//      filas.shift()

//      //  for  (let i in filas){
//     //     document.querySelector("#cuerpo").innerHTML +="<tr>";
//     //     for (let item of filas[i]){
//     //         document.querySelector("#cuerpo").innerHTML +="<td>"+item+"</td>";
//     //      } 
//     //      document.querySelector("#cuerpo").innerHTML +="<tr>";
//     //  }
//     //  for (let item of primerafila){
//     //     document.querySelector("#cuerpo").innerHTML +="<td>"+item+"</td>";
//     //  } 


//     //  cabecera.shif();
//     //  for (let i in filas){
//     //     columna = filas[i].split(separador);
//     //     document.querySelector("#cuerpo").innerHTML +="<tr>";
//     //     for (let item of columna){
//     //         document.querySelector("#cuerpo").innerHTML +="<td>"+item+"</td>";
//     //      }    
//     //      document.querySelector("#cuerpo").innerHTML +="</tr>";

//     // }
     

//     document.querySelector(".container").innerHTML = clase;

// function csvarray(csv, separador = ",") {
//     let filas = csv.trim().split("\n");
//     return filas.map(fila => fila.trim().split(separador));
// }


// function crearTabla(csv) {
//     const tabla = document.createElement("table");
//     const datos = csvarray(csv);

//     datos.forEach(fila => {
//         const tr = document.createElement("tr");
//         fila.forEach(celda => {
//             const td = document.createElement("td");
//             td.textContent = celda;
//             tr.appendChild(td);
//         });
//         tabla.appendChild(tr);
//     });

//     return tabla;
// }

// document.querySelector(".tabla").innerHTML = "";
// document.querySelector(".tabla").appendChild(crearTabla(csv));
// }

// csvToArray(csv);
