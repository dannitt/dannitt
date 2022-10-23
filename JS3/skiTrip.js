function skiTrip(input) {
    const days = Number(input[0]);
    const place = input[1];
    const mark = input[2];
let price = 0;
let nights = days - 1;
// console.log(nights)
switch (place) {
    case "room for one person" : price = 18 * nights; break;
    case "apartment" : price = 25 * nights; break;
    case "president apartment" : price = 35 * nights; break;
   } //console.log(price)
if (days < 10) {
    if (place === "apartment") {
        price = price - price * 30 / 100;
    } else if (place === "president apartment"){
        price = price - price * 10 / 100;
    }
} else if (days >= 10 && days < 15) {
    if (place === "apartment") {
        price = price - price * 35 / 100;
    } else if (place === "president apartment"){
        price = price - price * 15 / 100;
    }
} else if (days >= 15) {
    if (place === "apartment") {
        price = price - price * 50 / 100;
    } else if (place === "president apartment"){
        price = price - price * 20 / 100;
    } 
} 
if (mark === "positive") {
  price = price + price * 25 / 100;
  } else {
      price = price - price * 10/100;
  }
console.log(price.toFixed(2));
}
skiTrip(["2", "apartment", "positive"])

