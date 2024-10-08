let num1 = [1,2,3,4,5,6,7,8];
let str = ['1','2','3','4','5','6','7','8'];
let num2 = [1,2,3,4,5,6,7,8];
let num3 = [1,2,3,4,5,6,7,9];

let iguales = (ar1, ar2)=>{
    if (ar1.length != ar2.length){
        return false;
    }
    return ar1.every((a,b)=> a==ar2[b]); //eñ primer elemento del every es el elemento, pero el segundo es un INDICE! 
}

console.log(iguales(num1,num2));
console.log(iguales(num1,num3));
console.log(iguales(num1,str));