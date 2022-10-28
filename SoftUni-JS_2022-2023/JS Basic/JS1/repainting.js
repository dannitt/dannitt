function repainting(input){
const naylonPrice = 1.50;
const paintPrice = 14.50;
const mixPrice = 5;
const extraNaylon =2;
const extrapaintPersent = 0.1;
const casesPrice = 0.40;
const naylonAmnt = Number (input[0]);
const paintAmnt = Number (input[1]);
const mixAmnt = Number (input[2]);
const workHousrs = Number (input[3]);
const naylonTotalPrice = (naylonAmnt + extraNaylon) * naylonPrice;
const paintTotalPrice = (paintAmnt + extrapaintPersent*paintAmnt) * paintPrice;
const mixTotalPrice = mixAmnt * mixPrice
const thingsPrice = paintTotalPrice + naylonTotalPrice +mixTotalPrice + casesPrice;
const workersPricePerHour = thingsPrice * 0.3;
const totalCost = thingsPrice + workersPricePerHour * workHousrs
console.log (totalCost);
}
repainting(["10","11","4","8"]);