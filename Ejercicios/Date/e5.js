const day = new Date ("2024-9-15");
const year = 2070;

let manyMondays = (day, year) =>{ 
const testYear = new Date(day);
let match= 0;   
while (testYear.getFullYear()<=year){
    if (testYear.getDay()==1){
        match++;
    }
    testYear.setFullYear(testYear.getFullYear()+1);
}
    return match;
}
console.log(manyMondays(day,year));