const ar = [1,2,3,4,5,6,7,8];
const arBi = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//1
const arClone = [...ar];
arClone[2]= 20;
console.log(ar);
console.log(arClone);

//2
const arBiClone = [...arBi];
arBiClone[0] = 16;
arBiClone[1][2]= 42; //?????
arBi.forEach(e=> console.log(e));
arBiClone.forEach(e=> console.log(e));

