function excursion(input) {
let numPeople = Number(input[0]);
let numNights = Number(input[1]);
let numCards = Number(input[2])
let numTickets = Number(input[3]);
let oneNight = 20;
let oneCard = 1.60;
let oneTicket = 6;
let priceNights = numNights * oneNight 
let priceCards = numCards * oneCard
let priceTichet = numTickets * oneTicket
let totalPrice = numPeople * (priceNights + priceCards + priceTichet)
let totalPriceDisc = (totalPrice + totalPrice * 25 / 100)
console.log(totalPriceDisc.toFixed(2))
}
excursion(["131",
"9",
"33",
"46"])
