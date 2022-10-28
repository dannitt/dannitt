function walking(input) {
let index = 0;
const goal = 10000;
let command = input[index];
index++
let countSteps = 0;
let steps = 0
while(command !== "Going home"){
    steps = Number(command);
    countSteps += steps;
    
    if (countSteps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${countSteps - goal} steps over the goal!`);
        break;
    }
    command = input[index];
    index++
    
    }
    if (command === "Going home" ){
        steps = Number(input[index]);
        index++
        countSteps += steps
    
    if (countSteps < goal){
        console.log(`${Math.abs(countSteps - goal)} more steps to reach goal.`)
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${countSteps - goal} steps over the goal!`);
    }
}
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
