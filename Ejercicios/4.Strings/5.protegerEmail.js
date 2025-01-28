let protectEmail= (email) =>{
    let salida ='';
    let userDom = email.split('@');
    return salida = userDom[0].substring(0,(userDom[0].length/2))+'...@'+userDom[1];
    // for (let i =0; i<4;i++){
    //     salida+=userDom[0][i];
    // }
    // salida+='...@'+userDom[1];
}
console.log(protectEmail('EduardoLopez@gmail.com'));