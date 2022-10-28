function graduation(input) {
let index = 0;
let name = input[index];
index++
let counter = 0;
let i = 1;
let sumGrade = 0;
let isGraduate = false;
while(i <= 12){
    let mark = Number(input[index]);
    index++
    if(mark < 4.00){
        counter++
        if(counter > 1){
    isGraduate = true;
    console.log(`${name} has been excluded at ${i} grade`);
    break;   
        }
    continue;
    }
    sumGrade += mark;
    i++
}
if(!isGraduate){
    let averageGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



