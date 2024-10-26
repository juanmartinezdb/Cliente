{
    let escribir = function(mensaje) {
        document.getElementById("caja").innerHTML = '<p>' + mensaje + '</p>';
    }

    let teclasnormales = function(e) {
        let codigo = e.charCode || e.keyCode;
        let letra = String.fromCharCode(codigo);
        escribir("Carácter [" + letra + "]<br>Código [" + codigo + "]");
    }

    let teclasespeciales = function(e) {
        if (e.ctrlKey) {
            escribir("Carácter [ctrl]<br>Código [" + e.keyCode + "]");
        }
        if (e.altKey) {
            escribir("Carácter [alt]<br>Código [" + e.keyCode + "]");
        }
        if (e.shiftKey) {
            escribir("Carácter [shift]<br>Código [" + e.keyCode + "]");
        }
    }

    let init = function() {
        document.addEventListener("keyup", teclasnormales);
        document.addEventListener("keydown", teclasespeciales);
    }

    window.onload = init;
}
