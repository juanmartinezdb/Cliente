n = Number(prompt("Introduzca un número:"));
function factorial(n) {
    resultado = n;
    if (isNaN(n)) {
        alert("no es un numero");
    } else {
        for (i = 1; (n - i > 1); i++) {
            resultado *= n - i;
        }
        return resultado;
    } }

    finall = factorial(n);
    document.getElementById("resultado").innerHTML = "El factorial de " + n + " es " + finall;
