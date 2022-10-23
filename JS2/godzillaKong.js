function godzillaKong(input){
    const budjet = Number(input[0]);
    const numbStatisti = Number(input[1]);
    const priceCloths = Number(input[2]);
let decor = budjet * 10 / 100;
//console.log(decor);
let clothsPrice = numbStatisti * priceCloths;
//console.log(clothsPrice);
if (numbStatisti > 150){
    clothsPrice = clothsPrice - clothsPrice * 10 / 100;
    //console.log(clothsPrice);
}
let price = clothsPrice + decor;
let need = budjet - price;
if (price > budjet){
  console.log(`Not enough money!`);
  console.log(`Wingard needs ${Math.abs(need).toFixed(2)} leva more.`) ;
} else {
console.log(`Action!`);
console.log(`Wingard starts filming with ${(need).toFixed(2)} leva left.`)
}
}
godzillaKong(["9587.88", "222", "55.68"]);