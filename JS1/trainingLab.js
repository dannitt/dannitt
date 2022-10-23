function trainingLab(input){
const h = Number (input[0]);
const w = Number (input[1]);
const wWithoutPath = w - 1
const nrDesksw = Math.floor(wWithoutPath / 0.7) .toFixed(0);
const nrDesksh = Math.floor(h / 1.2) .toFixed(0);
const numberRabotniMesta = nrDesksw * nrDesksh - 3;
console.log(numberRabotniMesta.toFixed(0));
}
trainingLab(["15","8.9"]);