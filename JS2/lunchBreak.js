function lunchBreak(input){
    let ime = input[0];
    const timeMovie = Number(input[1]);
    const rest = Number(input[2]);
    let lunchTime = rest / 8;
    let otdihTime = rest / 4;
    let spareTime = lunchTime + otdihTime;
    let leftTime = rest - spareTime;
if (leftTime >= timeMovie){
    freeTime = Math.ceil(leftTime - timeMovie);
    console.log(`You have enough time to watch ${ime} and left with ${freeTime} minutes free time.`)
} else {
    freeTime = Math.ceil(timeMovie - leftTime);
    console.log(`You don't have enough time to watch ${ime}, you need ${freeTime} more minutes.`)
}
}
lunchBreak(["Teen Wolf", "60", "100"]);