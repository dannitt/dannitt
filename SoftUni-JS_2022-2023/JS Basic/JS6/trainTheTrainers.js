function trainTheTrainers(input){
    let index = 0;
    let countJury = Number(input[index]);
    index++;
    let namePresentation = input[index];
    index++
    let command = " ";
    let res = 0;
    let numbMarks = 0;
    let countPres = 1;
    let mark = 0
    let allRes = 0
    while (command !== "Finish"){
        for (let n = 1 ; n <=countJury; n++){
        command = Number(input[index]);
        index++
        res += command;
        numbMarks++
        }
        
        
            
        currMark = res / countJury
        allRes += res
        
        console.log(`${namePresentation} - ${currMark.toFixed(2)}.`)
        
        command = input[index];
        index++
        if (command !== "Finish"){
        namePresentation = command;
        countPres++;
        res = 0
        
        }
    }
    command = input[index];
        index++
    console.log(`Student's final assessment is ${(allRes / numbMarks).toFixed(2)}.`)
    
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
