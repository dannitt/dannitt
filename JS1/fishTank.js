function fishTank (input){
const lenght = Number (input[0]);
const long = Number (input[1]);
const hight = Number (input[2]);
const persent = Number (input[3])/100;
const valueTank = lenght * long * hight;
const valueTankLitr = valueTank / 1000;
const valueTankLitrWithoutStones = valueTankLitr - valueTankLitr * persent;
console.log (valueTankLitrWithoutStones);
}
fishTank(["85","75","47","17"]);