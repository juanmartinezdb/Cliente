let swapeCase = (cadena) => {
    let salida='';
    for(l of cadena){
        salida+=l===l.toLowerCase()?l.toUpperCase():l.toLowerCase();
    }
    return salida;
}
  console.log(swapeCase('oLa K asE'));