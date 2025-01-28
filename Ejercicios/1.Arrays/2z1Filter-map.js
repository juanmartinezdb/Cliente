function creaMes(name, number, days=31) {
    return {
        name,
        number,
        days
    }
}
let months = [
    creaMes('January',1,),
    creaMes('February',2,28),
    creaMes('March',3,),
    creaMes('April',4,30),
    creaMes('May',5,),
    creaMes('June',6,30),
    creaMes('July',7,),
    creaMes('August',8,),
    creaMes('Septembre',9,30),
    creaMes('October',10,),
    creaMes('November',11,30),
    creaMes('December',12,),
]
console.log(months.filter(e => e.days==30).map(e=>e.name));
console.log(months.filter(e =>e.number%2).map(e=>e.name));
console.log(months.map(e=>e.days).reduce((ac, e)=>ac +e, 0));