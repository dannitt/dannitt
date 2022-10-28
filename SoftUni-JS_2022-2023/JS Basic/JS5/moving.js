function moving(input) {
let index = 0;
let w = Number(input[index]);
index++
let l = Number(input[index]);
index++
let h = Number(input[index]);
index++
let command = input[index];
index++
let room = w * l * h;
let numBoxesTaken = 0;
let counter = 0;
let restPlace = 0;
while (command !== "Done"){
    numBoxesTaken = Number(command);
    counter += numBoxesTaken;
    if (room - numBoxesTaken <= 0){
        break;
    }
    command = input[index];
    index++
    if (command === undefined){
        break
    }
}
if (command === "Done"){
    restPlace = room - counter
    console.log(`${restPlace} Cubic meters left.`)
    } else if (room - counter <= 0) {
    restPlace = Math.abs(room - counter)
    console.log(`No more free space! You need ${restPlace} Cubic meters more.`)
    } else {
        restPlace = Math.abs(room - counter)
        console.log(`${restPlace} Cubic meters left.`)
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

