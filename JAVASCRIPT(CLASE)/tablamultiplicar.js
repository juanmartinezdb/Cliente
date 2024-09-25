num = Number(prompt("Introduzca un numero"));
resultado = "La tabla de multiplicar de " + num + " es:<br>";
function tablamultiplicar() {
    for (i = 1; i <= 10; i++) {
        resultado += num + " x " + i + " es " + num * i + "<br>";
    }
    return resultado;
}
document.getElementById("resultado").innerHTML = tablamultiplicar();