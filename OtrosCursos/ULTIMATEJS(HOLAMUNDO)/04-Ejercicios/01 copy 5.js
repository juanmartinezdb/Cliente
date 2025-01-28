//Crear algoritmo que devuelva numero  menor y mayor de un array.

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let minMax = [arr[0], arr[0]];
    for (numero of arr) {
        minMax[0] = minMax[0] < numero ? minMax[0] : numero;
        minMax[1] = minMax[1] > numero ? minMax[1] : numero;
    }
    // for (let i = 0; i < arr.length; i++) {
    //     if (minMax[0] > array[i]) {
    //         minMax[0] = array[i];
    //     }
    //     if (minMax[1] < array[i]) {
    //         minMax[1] = array[i];
    //     }
    // }
    return minMax;

}

let numeros = getMenorMayor(array);
console.log(numeros);