function timeAndMinutes (input){
let chas = Number(input[0]);
let min = Number(input[1]);
time = min + 15;
if (time >= 60){
   chas = chas + 1;
   time = time - 60;
}
if (chas > 23){
    chas = chas -24;
}
if (time <= 9){
    console.log(`${chas}:0${time}`);
} else{
console.log(`${chas}:${time}`);
}
}
timeAndMinutes(["12", "45"]);