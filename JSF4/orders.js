function orders(type, num) {
    let price = 0
switch (type){
   case "coffee" : price = num * 1.50; break;
   case "coke" : price = num * 1.40; break;
   case "water" : price = num * 1.00; break;
   case "snacks" : price = num * 2.00; break;
} 
console.log(price.toFixed(2))
}
orders("coffee", 2)