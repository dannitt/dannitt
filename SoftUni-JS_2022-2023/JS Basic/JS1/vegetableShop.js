function vegetableShop (input){
const vegetablePrice  = Number (input[0]);
const fruitPrice = Number (input[1]);
const vegetablesAmnt = Number (input[2]);
const fruitsAmnt = Number (input[3]);
const cours = 1.94
const vegetableTotalPrice = vegetablePrice * vegetablesAmnt;
const fruitTotalPrice = fruitPrice * fruitsAmnt;
const totalPrice = (vegetableTotalPrice + fruitTotalPrice) / cours;
console.log (totalPrice.toFixed(2));
}
vegetableShop(["0.194","19.4","10","10"]);