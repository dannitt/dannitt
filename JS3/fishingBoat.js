function fishingBoat(input) {
    const budjet = Number(input[0]);
    const timeOfYear = input[1];
    const numFishers = Number(input[2]);
let price = 0;
switch (timeOfYear) {
    case "Spring" : price = 3000; break;
    case "Summer" : 
    case "Autumn" : price = 4200; break;
    case "Winter" : price = 2600; break;
    }
if (numFishers <= 6){
    price = price - price * 10 /100;
} else if (numFishers <= 11 && numFishers > 6){
    price = price - price * 15 /100;
} else if (numFishers > 12) {
    price = price - price * 25 /100;
    }   
if (numFishers % 2 === 0 && timeOfYear !== "Autumn") {
    price = price - price * 5 /100;
}
resto = budjet - price;
if (budjet >= price){
console.log(`Yes! You have ${(resto).toFixed(2)} leva left.`);
} else{
    console.log(`Not enough money! You need ${(Math.abs(resto)).toFixed(2)} leva.`)
}
}
fishingBoat(["2000", "Winter", "12"]);