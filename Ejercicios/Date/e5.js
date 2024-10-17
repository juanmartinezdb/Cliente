const day = new Date ("2024-9-15");
const year = 2070;

let manyMondays = (day, year) =>{ 

let match= 0;   
while (day.getFullYear()<=year){
    if (day.getDay()==1){
        match++;
    }
    day.setFullYear(day.getFullYear()+1);
}
    return match;
}
console.log(manyMondays(day,year));