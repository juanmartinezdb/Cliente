const week = {
    1:'monday',
    2:'tuesday',
    3:'wednesday',
    4:'thursday',
    5:'friday',
    6:'saturday',
    7:'sunday',
    0:'sunday'
};
const months = ['january','february','march','april','may','june','july','augost','september','october','november','december'];
const date = new Date();

let dayOf = (date) => week[date.getDay()]+' '+date.getDate()+' of '+months[date.getMonth()]+' of '+date.getFullYear();

console.log(dayOf(date));
