const cvs = `1,2,3
4,5,hola
7,8,9`;
console.log(cvs);

let cvsTo2d = (cvs)=>cvs.split("\n").map(e=> e.split(","));
const ar2d = cvsTo2d(cvs);
ar2d.forEach(e=> console.log(e));