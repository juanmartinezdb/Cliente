let capitalizeWords = (cadena) => {
    let salida = '';
    let words = cadena.split(' ');
    words.forEach(word => {
        salida += word[0].toUpperCase() + word.slice(1) + ' ';
    });
    salida.slice(salida.length - 1);
    return salida;
}
console.log(capitalizeWords('ola k ase'));