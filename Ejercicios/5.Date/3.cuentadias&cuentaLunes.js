const today = new Date();
const start = new Date("2024-9-15");

//Days since September 15;
console.log((today-start)/1000/60/60/24);

//Mondays
let mondays = (start) =>{

const testDay = new Date();
let mondays = 0;    
    while (testDay>=start){
        if (testDay.getDay()==1){
            mondays++;
        }
        testDay.setDate(testDay.getDate()-1);
    }
    return mondays;
}
console.log("there are "+mondays(start)+" mondays since "+ start.toDateString());