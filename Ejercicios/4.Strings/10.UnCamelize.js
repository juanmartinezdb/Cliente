let unCamelize = (cadena, char=' ')=>{
    let salida = cadena;
    for (letra of salida){
        if (letra ===letra.toUpperCase()){
            salida =salida.replace(letra, (char+letra.toLowerCase()));
        }
    }
    return salida;
}
console.log(unCamelize("holaMundo"));
console.log(unCamelize("holaMundo", "-"));