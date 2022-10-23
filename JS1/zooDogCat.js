function zooDogCat(input){
let d = Number(input[0]);
let c = Number(input[1]);
let onePriceD = Number(2.50);
let onePriceC = Number(4);
let priceD = d * onePriceD;
let priceC = c * onePriceC;
let sume = priceD + priceC;
console.log(sume);
}
zooDogCat([4, 5])