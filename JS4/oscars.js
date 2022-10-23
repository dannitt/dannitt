function oscars(input){
let index = 0;
let nameActor = input[index];
index++;
let points = Number(input[index]);
index++;

let numJuje = Number(input[index]);
index++;
let isNominee = false;

for(let i=0; i< numJuje; i++){
    let nameJuje = input[index];
    index++;
    let pointsJuje = Number(input[index]);
    index++;
    points += nameJuje.length * pointsJuje / 2;
    if(points > 1250.5){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
        isNominee = true;
        break;
    }
}
if(!isNominee){
    let diff = Math.abs(points - 1250.5);
console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
}
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
