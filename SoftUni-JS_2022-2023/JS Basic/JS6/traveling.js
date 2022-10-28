function traveling(input) {
let index = 0;
let dest = input[index];
index++
let budjet = Number(input[index]);
index++
let command = input[index];
index++

let neededSum = 0
while (dest !== "End"){
    let sum = 0
    while (sum <= budjet){
        neededSum = Number(command);
        sum += neededSum
        //command = input[index];
        //index++
        if (sum >= budjet){
            console.log(`Going to ${dest}!`)
            break;
    }
    command = input[index];
    index++ 
        
}
dest = input[index];
index++
budjet = Number(input[index]);
index++
command = input[index];
index++
 
}
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
