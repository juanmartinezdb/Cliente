function getbyIdx(arr, idx) {
    if (idx >= arr.length || idx < 0) {
        return "el indice no está en el array";
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);