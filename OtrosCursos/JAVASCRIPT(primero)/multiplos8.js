
const num1 = Number(prompt("Introduce el primer número:"));
const num2 = Number(prompt("Introduce el segundo número:"));
salida = " sin inicializar";

function multiplo8() {
    resultado ="sin nada";
    if (isNaN(num1) || isNaN(num2)) {
        resultado = "No son numeros.";
    } else {
        menor = Math.min(num1, num2);
        mayor = Math.max(num1, num2);
        resultado = "Múltiplos de 8 entre " + menor + " y " + mayor + ": ";
        for ( i = menor; i <= mayor; i++) {
            if (i % 8 === 0) {
                resultado += i + ", ";
            }
        }
    }
    return resultado;
}
salida = multiplo8();
document.getElementById('resultado').innerHTML = salida;
