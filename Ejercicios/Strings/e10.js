let camelize = (cadena) => {
    let salida ='';
    words = cadena.split(' ');
    for(w of words){
        salida+= w[0].toUpperCase()+w.slice(1);
    }
    return salida;
}

console.log(camelize('prueba de Capitalizacion ejercicio 1 E'));