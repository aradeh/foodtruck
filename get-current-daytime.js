let today = new Date();
let timeNow = "";
let day = today.getDay(); //0-6
if(today.getMinutes()<10){
    today.getHours()+":0"+today.getMinutes();
} else {
    timeNow = today.getHours()+":"+today.getMinutes();
}

let weekdays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

const dayTime = {
    time : timeNow,
    day : weekdays[day]
}

console.log("Current Time:  " + timeNow);
module.exports.nowDayTime = dayTime;