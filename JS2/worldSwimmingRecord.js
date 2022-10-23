function worldSwimmingRecord(input){
    const recordSec = Number(input[0]);
    const distanceMetri = Number(input[1]);
    const timeSecPerMetr = Number(input[2]);
let timeSwim = distanceMetri * timeSecPerMetr
//console.log(timeSwim);
let water = Math.floor(distanceMetri / 15) * 12.5;
//console.log(water);
let timeMetrWater = timeSwim + water;
//console.log(timeMetrWater);
if (recordSec > timeMetrWater){
    console.log(`Yes, he succeeded! The new world record is ${(timeMetrWater).toFixed(2)} seconds.`)
} else {
    let time = timeMetrWater - recordSec
console.log(`No, he failed! He was ${(time).toFixed(2)} seconds slower.`);
}
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);