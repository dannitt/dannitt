function examPreparation(input) {
let index = 0;
let badMarks = input[index];
index++;
let command = input[index];
let lastProblemName = "";
let counter = 0;
let sumMarks = 0;
let sumBadMarks = 0;
while(command !== "Enough"){ 
    lastProblemName = command 
    counter++;
    index++;
    
    let currentMark = Number(input[index]);
    sumMarks += currentMark;
    if (currentMark <= 4.00){
    sumBadMarks++;
    }
if (sumBadMarks >= badMarks){
    console.log(`You need a break, ${sumBadMarks} poor grades.`)
    break;
}
index++
command = input[index];

}
if (command === "Enough"){
    let avMark = (sumMarks / counter).toFixed(2);
    console.log(`Average score: ${avMark}`);
    console.log(`Number of problems: ${counter}`)
    console.log(`Last problem: ${lastProblemName}`)
}
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])





