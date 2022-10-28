function foodDelivery (input){
const chickenPrice = 10.35;
const fishPrice = 12.40;
const veganPrice = 8.15;
const chickenNumb = Number (input[0]);
const fishNumb = Number (input[1]);
const veganNumb = Number (input[2]);
const totalChikenPrice = chickenPrice * chickenNumb;
const totalFishPrice = fishPrice * fishNumb;
const totalVegPrice = veganPrice * veganNumb;
const totalMealPrice = totalChikenPrice + totalFishPrice + totalVegPrice;
const dessertPrice = totalMealPrice * 0.2;
const deliveryPrice = 2.50;
const totalPrice = totalMealPrice + dessertPrice + deliveryPrice;
console.log (totalPrice);
}
foodDelivery(["2","4","3"]);