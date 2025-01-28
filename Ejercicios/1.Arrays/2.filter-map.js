let nums = [1,2,3,-4,5,6,-7,8,9];
let nums2 = [1,2,3,-4,5,6,-7,8,9];

//a aqui me estoy cargando el primer array.
function numPos(nums){
    for( i=0; i<nums.length;i++){
        if (nums[i]<0){
            nums[i] = nums[i]-nums[i]*2;
        }
    }
}
numPos(nums);
//b

    let listaPos = nums.map(e=> {
        if(e<0){
            e=+e-+e*2
        }
        return e;

    });
//b (si entendemos que hay que quedarse solo con los positivos)
    let positivos = nums2.filter(e=>e>=0);

console.log(nums);
console.log(listaPos);
console.log(positivos);

