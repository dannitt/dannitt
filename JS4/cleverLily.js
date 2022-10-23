function cleverLily(input) {
let index = 0
let age = Number(input[index]);
 index++;
let washingMashinePr = Number(input[index]);
 index++;
let toyPrice = Number(input[index]);
 index++;
let money = 0;
let tempMoney= 10;
let toyCount = 0;
for(let i=1; i<= age; i++){
    if(i % 2 === 0){
money += tempMoney;
tempMoney +=10;
money -=1;
    } else {
        toyCount++;
    }
}
money += toyCount * toyPrice;
let diff = Math.abs(money - washingMashinePr);
if(money >= washingMashinePr){
    console.log(`Yes! ${diff.toFixed(2)}`);
} else{
    console.log(`No! ${diff.toFixed(2)}`)
}
}
cleverLily(["21",
"1570.98",
"3"])
