function coins(input) {
let money = Number(input[0]);
let coins = parseInt(money * 100);
let counter = 0;
while (coins > 0){
 if (coins >= 200){
     counter++
     coins -= 200;
     continue
 } 
 if(coins >= 100){
     counter++
     coins -= 100;
     continue
 }
 if (coins >= 50){
     counter++
     coins -= 50;
     continue
 }
 if (coins >= 20){
     counter++
     coins -= 20;
     continue
 }
 if (coins >= 10){
     counter++
     coins -= 10;
     continue
 }
 if (coins >= 5){
     counter++
     coins -= 5
     continue
 }
 if (coins >= 2){
    counter++
    coins -= 2
    continue
}
if (coins >= 1){
    counter++
    coins -= 1}
    continue
}
console.log(counter)
}
coins(["4.40"])