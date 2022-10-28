function deerOfSanta(input){
let daysOut = Number(input[0]);
let food = Number(input[1]);
let dayFood1Deer = Number(input[2]);
let dayFood2Deer = Number(input[3]);
let dayFood3Deer = Number(input[4]);
let foodNeeded1Deer = daysOut * dayFood1Deer
let foodNeeded2Deer = daysOut * dayFood2Deer
let foodNeeded3Deer = daysOut * dayFood3Deer
let totalFoodNeeded = foodNeeded1Deer + foodNeeded2Deer + foodNeeded3Deer
let foodLeft = Math.abs(food - totalFoodNeeded)
if (totalFoodNeeded <= food){
    console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodLeft)} more kilos of food are needed.`)
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
