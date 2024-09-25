numdni = parseInt(prompt("Introduzca el numero sin letra del DNI"));
letra = prompt("Introduce la letra").toUpperCase();

function check() {
    salida = "";
    if ((0 > numdni) ||  (numdni > 99999999)) {
        salida = "Dni fuera de rango";
    } else if (letra == calcularLetra()) {
        salida = "Dni y letra introducidos con exito";
    } else {
        salida = "Dni y letra no coinciden";
    }
    return salida;
}


function calcularLetra() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
        'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    return  letras[numdni%23];
}

document.getElementById("resultado").innerHTML = check();
document.getElementById("resultado2").innerHTML = calcularLetra();



