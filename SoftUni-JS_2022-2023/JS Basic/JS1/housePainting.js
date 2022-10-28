function housePainting (input){
const x = Number (input[0]);
const y = Number (input[1]);
const h = Number (input[2]);
const frontBackStena = 2 * x * x - 1.2 * 2;
const sideStena = 2 * x * y - 2 * 1.5 * 1.5;
const pokriv = 2 * x * y + 2 * x * h / 2;
const zelBoq = (frontBackStena + sideStena) / 3.4;
const chervBoq = pokriv / 4.3;
console.log(zelBoq.toFixed(2));
console.log(chervBoq.toFixed(2)); 
}
housePainting(["6","10","5.2"]);