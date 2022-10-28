function tennisRanklist (input) {
let index = 0;
let numTurnements = Number(input[index]);
index++
let startPoints = Number(input[index]);
index++;

let tempPoints = 0;
let counter = 0;
for (let i=0; i<= numTurnements; i++){
    let tournament = input[index];
    index++;
switch (tournament) {
    case "W": tempPoints += 2000;
    counter++;
        break;
    case "F": tempPoints += 1200;
        break;
    case "SF": tempPoints += 720;
        break;
}  
}
console.log(`Final points: ${tempPoints + startPoints}`);
console.log(`Average points: ${Math.trunc(tempPoints / numTurnements)}`) ;
console.log(`${(counter / numTurnements * 100).toFixed(2)}%`)    
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


