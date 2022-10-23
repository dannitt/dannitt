function trapets (input){
const a = Number (input[0]);
const b = Number (input[1]);
const h = Number (input[2]);
const amnt = (a + b) * h / 2;
console.log(amnt.toFixed(2));
}
trapets(["8","13","7"]);