function toyShop(input){
    const excursia = Number(input[0]);
    const numberPuzle = Number(input[1]);
    const numberDolls = Number(input[2]);
    const numberBears = Number(input[3]);
    const numberMinions = Number(input[4]);
    const numberTrucs = Number(input[5]);
    const puzlePrice = 2.60;
    const dollPrice = 3;
    const bearPrice = 4.10;
    const minionPrice = 8.20;
    const trucPrice = 2;
const numberToys = numberPuzle + numberDolls + numberBears + numberMinions + numberTrucs;
let totalPrice = numberPuzle * puzlePrice + numberDolls * dollPrice + numberBears * bearPrice + numberMinions * minionPrice + numberTrucs * trucPrice;
if (numberToys >= 50){
    totalPrice = totalPrice - totalPrice * 25 / 100;
}
    let naem = totalPrice * 10 / 100;
     let resto = totalPrice - naem;
let pechalba = (resto - excursia);
if (pechalba >= 0){
  console.log(`Yes! ${pechalba.toFixed(2)} lv left.`);  
} else {
        console.log(`Not enough money! ${Math.abs(pechalba).toFixed(2)} lv needed.`); 
}
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);