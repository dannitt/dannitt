function accountBalance(input) {
let index = 0;
let amount = input[index];
index++
let sum = 0;
let comm = 0
while(amount !== "NoMoreMoney"){
    if(amount >=0){
    let comm = Number(amount)
        sum += comm
    console.log(`Increase: ${comm.toFixed(2)}`);
    
} else{
    console.log("Invalid operation!");
    break;
}

amount = input[index];
    index++;
}
console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])


