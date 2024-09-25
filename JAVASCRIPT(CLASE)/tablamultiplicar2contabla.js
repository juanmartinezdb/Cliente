num = Number(prompt("Introduzca un numero"));
resultado = "La tabla de multiplicar de " + num + " es:<br>";

function tablamultiplicar() {
    resultado+="<table><tr><th>Multiplicacion</th><th>Resultado</th></tr>"
    for (i = 1; i <= 10; i++) {

        resultado +="<tr>"+num + " x " + i +"</td><td>   es " + num * i + "</td></tr>";
    }
    resultado+="</table>";
    return resultado;
}
document.getElementById("resultado").innerHTML = tablamultiplicar();