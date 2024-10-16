let test = 0;

if (test){
    console.log('entra')
} else {
    console.log('no entra');
    
}

salida = test ||''||NaN|| null|| 'algo'; //evalua los valores, si son FALSOS salta al siguiente
if (salida){
    console.log('entra') //entra proque al final toma 'algo'
} else {
    console.log('no entra');
    
}
salida = test ?? 'algo'; //evalua los valores, si son UNDEFINED o NULL salta al siguietne
if (salida){
    console.log('entra')
} else {
    console.log('no entra'); //no entra porque toma 0, que es un falso aunque tenga un valor definido.
    
}