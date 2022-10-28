function bitcoinMining (input) {
let index = 0
let shift = input[index];
index++
let bitkoinPrice = 11949.16;
let gGoldPrice = 67.51;
let counterDay = 1;
let counterMoney = 0;
let counterBit = 0;
let purchDay = 0
while (shift !== undefined){
    
    if (counterDay%3 === 0){
        shift -= shift *0.3;  
    }
    counterMoney += shift * gGoldPrice
    while (counterMoney >= bitkoinPrice){ 
        counterMoney -= bitkoinPrice;
        counterBit ++
     if (counterBit === 1) {  
        purchDay = counterDay
        }
     } 
    shift = input[index]
    index++
    counterDay ++
}
    console.log(`Bought bitcoins: ${counterBit}`);
if (purchDay !== 0){
    console.log(`Day of the first purchased bitcoin: ${purchDay}`)
}
    console.log(`Left money: ${counterMoney.toFixed(2)} lv.`)
}
bitcoinMining([50,100])