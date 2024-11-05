
document.addEventListener('DOMContentLoaded', () => {
    while (true){
    let contenido = document.createElement("h1");
    contenido.textContent = "sin tele y sin cerveza homer pierde la cabeza"
    let espacio = document.createElement("br");
    document.body.prepend(contenido);
    document.body.appendChild(espacio);
    }
});
