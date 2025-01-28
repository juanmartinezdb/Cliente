// nombre: ancho x alto 
// 8K 7680 x 4320
// 4k 3840 x 2160
// wQHD 3840 x 2160
// FHD 1920 x 1080
// hd 1280 x 720

function nombreResolucion(ancho, alto) {
    if (ancho > 7680 && alto > 4320) {
        return '8K';
    } else if (ancho > 3840 && alto > 2160) {
        return '4K';
    } else if (ancho > 2560 && alto > 1440) {
        return 'WQHD';
    } else if (ancho > 1920 && alto > 1080) {
        return 'FHD';
    } else if (ancho > 1280 && alto > 720) {
        return 'HD';
    } else {
        return 'SD';
    }
}
let nombre = nombreResolucion(1366, 768);

console.log(nombre);
