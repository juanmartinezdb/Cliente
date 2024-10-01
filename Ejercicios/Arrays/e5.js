let nums = [1,2,3,-4,5,6,-7,8,9];
let max= -100;
for (num of nums){
    if (num>max){
        max = num;
    }    
}
console.log(max);