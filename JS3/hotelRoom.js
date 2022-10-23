function hotelRoom(input) {
    const month = input[0];
    const numDays = Number(input[1]);
    let place = "";
    let priceAp = 0;
    let priceSt = 0;
if (month === "May" || month === "October") {
   priceAp = numDays * 65;
   priceSt = numDays * 50; 
          if (numDays > 7 && numDays <= 14){
            priceSt = priceSt - priceSt * 5 / 100;
        } else if (numDays > 14) {
            priceSt = priceSt - priceSt * 30 / 100;
         } 
} else if (month === "June" || month === "September"){
   priceAp = numDays * 68.7; 
   priceSt = numDays * 75.20;
        if (numDays > 14){
            priceSt = priceSt - priceSt * 20 / 100;
         } 
}  else if (month === "July" || month === "August") {
    priceAp = numDays * 77; 
    priceSt = numDays * 76; 
    }  
if (numDays > 14) {
    priceAp = priceAp - priceAp * 10 / 100;
    }
console.log(`Apartment: ${priceAp.toFixed(2)} lv.`)
console.log(`Studio: ${priceSt.toFixed(2)} lv.`) 
}
hotelRoom(["August", "20"])