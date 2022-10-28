function cToF (input){
const c = Number (input[0]);
const f = ( c * 9 / 5) + 32;
console.log(f.toFixed(2));
}
cToF(["25"]);