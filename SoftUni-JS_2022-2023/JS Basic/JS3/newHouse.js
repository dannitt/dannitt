function newHouse(input) {
    const flower = input[0];
    const numFlower = Number(input[1]);
    const budjet = Number(input[2]);
    let price = 0;
    let resto = 0;
if (flower === "Roses") {
    price = numFlower * 5;
        if (flower === "Roses" && numFlower > 80){
            price = price - price * 10 / 100;
        }
    }
if (flower === "Dahlias") {
       price = numFlower * 3.80; 
        if (flower === "Dahlias" && numFlower > 90){
    price = price - price * 15 / 100;
        }
    }
if (flower === "Tulips") {
        price = numFlower * 2.80;
        if (flower === "Tulips" && numFlower > 80){
        price = price - price * 15 / 100;
        }  
    }
if (flower === "Narcissus") {
        price = numFlower * 3;
        if (flower === "Narcissus" && numFlower < 120){
    price = price + price * 15 / 100;
        }  
    }
if (flower === "Gladiolus"){
     price = numFlower * 2.50;
    if (flower === "Gladiolus" && numFlower < 80){
    price = price + price * 20 / 100;
        }  
    }
resto = budjet - price;
//console.log(resto)
if (budjet >= price){
    console.log(`Hey, you have a great garden with ${numFlower} ${flower} and ${(resto).toFixed(2)} leva left.`)
    } else {
    console.log(`Not enough money, you need ${(Math.abs(resto)).toFixed(2)} leva more.`)
    }    
}
newHouse(["Tulips", "88", "260"]);