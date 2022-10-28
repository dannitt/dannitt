function shopping(input){
const budjet = Number(input[0]);
const numCards = Number(input[1]);
const numProc = Number(input[2]);
const numRam = Number(input[3]);
const cardPrice = 250;
let procPrice = cardPrice * numCards * 35 / 100;
//console.log(procPrice);
let ramPrice = cardPrice * numCards * 10 / 100;
//console.log(ramPrice);
let totalPrice = cardPrice * numCards + procPrice * numProc + ramPrice * numRam;
//console.log(totalPrice);
if (numCards > numProc){
    totalPrice = (totalPrice - totalPrice * 15 / 100);
}
//console.log(totalPrice);
if (budjet >= totalPrice){
    let cost = budjet - totalPrice;
    console.log(`You have ${(cost).toFixed(2)} leva left!`);
} else {
    let cost = totalPrice - budjet;
console.log(`Not enough money! You need ${(cost).toFixed(2)} leva more!`);
}
}
shopping(["920.45", "3", "1", "1"]);