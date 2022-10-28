function vacation(input) {
let index = 0;
let vacationPrice = Number(input[index]);
index++
let money = Number(input[index]);
index++
let action = ""
let daySpend = 0;
let dayCounter = 0;
let sMoney = 0;
while(money <= vacationPrice){
  let action = input[index];
  index++;
  let sMoney = Number(input[index]);
  index++
  switch(action){
      case "spend" : money -= sMoney
      if (money <= 0){
          money = 0;
        }
        daySpend++;
        dayCounter++
        break;
      case "save" : money += sMoney
      daySpend = 0
      dayCounter++
      break
  }  
  if (daySpend >=5){
      console.log(`You can't save the money.`);
      console.log(`${dayCounter}`);
      break;
  }
 
 if (money >= vacationPrice){
    console.log(`You saved the money for ${dayCounter} days.`)
    break;
}
}
}
vacation(["110",
"60",
"save",
"20",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])



