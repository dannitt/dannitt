function sumSeconds(input){
const first = Number(input[0]);
const second = Number(input[1]);
const third = Number(input[2]);
const result = ((first + second + third).toFixed(0));
let timeMin = ( Math.trunc(result / 60));
let timeSec = (((result / 60 - Math.trunc(result/60)) * 60).toFixed(0));
if (result < 10){
    console.log("0" + ":" + "0" + result);
} else if (result < 60){
    console.log("0" + ":" + result);
} else if (timeSec <= 9){
    console.log(timeMin + ":" + "0" + timeSec);
} else {
    console.log(timeMin + ":" + timeSec);
}
}
sumSeconds(["50", "50", "50"]);