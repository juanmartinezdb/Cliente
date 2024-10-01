let nums = [1,2,3,4,5,6,7,8,9];
//a
//revisar porque esto no puede ser
let square = [1,2,3,4,5,6,7,8,9];
for (i =0; i<nums.length;i++){
    square[i] = nums[i]*nums[i];
}
console.log(square);
//b
let cuadrado = nums.map((e)=>e*e);
console.log(cuadrado);