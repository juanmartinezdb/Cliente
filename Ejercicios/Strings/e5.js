let abbrevName = (cadena) => {
    let salida = '';
    const words = cadena.split(' ');
    words.forEach( palabra => {
        salida+=palabra[0]+".";
    });
    return salida;
}
console.log(abbrevName('Rodrigo Iglesias Perez'));
// version con nombre y el resto abreviado


let abbrevName2 = (cadena) => {
    let salida = '';
    const words = cadena.split(' ');
    salida+=words[0]+" ";
    for (i=1;i<words.length;i++){
        salida+=words[i][0]+".";
    }
    // salida+=words.forEach(e =>e.charAt(0)+".") editar
    return salida;
}
console.log(abbrevName2('Rodrigo Iglesias Perez'));
console.log(abbrevName("Felipe"), abbrevName2("Felipe"));