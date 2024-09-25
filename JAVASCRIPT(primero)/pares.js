num = Number(prompt("Introduzca un numero"));
resultado;

function pares() {
    if (isNaN(num)) {
        resultado = "no es un numero";
    } else {
        if (num % 2 == 0) {
            resultado = "El numero es par"
        } else {
            resultado = "El numero es impar"
        }
    }
    return resultado;

}
document.getElementById("resultado").innerHTML = pares();