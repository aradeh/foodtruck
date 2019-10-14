let today = new Date();
console.log(today);
let timeNow = today.getHours()+":"+today.getMinutes();
let day = today.getDay(); //0-6

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

console.log(timeNow);
module.exports.nowDayTime = dayTime;