frase = prompt("Introduzca una frase").toLowerCase().trim().replace(/\s/g, '');
function comprobar() {
    esPali = true;
    for (i = 0; esPali && (i < frase.length/2); i++) {
        if (frase[i] != frase[frase.length - 1 - i]) {
            esPali = false;
        }
    }
    return esPali;
}
document.getElementById("resultado").innerHTML =  comprobar() ? 'Es un palindromo' : 'No es un plaindromo';
