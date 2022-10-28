function onTimeExam(input) {
    const hourEx = Number(input[0]);
    const minEx = Number(input[1]);
    let hourArr = Number(input[2]);
    const minArr = Number(input[3]);
let hourExInMin = hourEx * 60 + minEx;
let hourArrInMin = hourArr * 60 + minArr;
let diffInTime = Math.abs(hourExInMin - hourArrInMin);
let hourDiff = Math.floor(diffInTime / 60);
let minDiff = diffInTime % 60;
if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)){
    minDiff = `0${minDiff}`;
} 
if (hourArrInMin === hourExInMin) {
    console.log("On time");
} else if((hourArrInMin < hourExInMin) && diffInTime <= 30) {
    console.log("On time");
    console.log(`${minDiff} minutes before the start`);
} else if((hourArrInMin > hourExInMin && diffInTime < 60)){
    console.log("Late")
    console.log(`${minDiff} minutes after the start`);
} else if (hourArrInMin > hourExInMin && hourDiff <= 60) {
    console.log("Late")
    console.log(`${hourDiff}:${minDiff} hours after the start`);
} else if (hourExInMin > hourArrInMin && diffInTime > 30 && diffInTime < 60) {
    console.log("Early")
    console.log(`${minDiff} minutes before the start`);
} else {
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`)
}
}

onTimeExam(["11", "30", "12", "29"])
