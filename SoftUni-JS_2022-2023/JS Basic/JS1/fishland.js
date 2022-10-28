function fishland (input){
const skumriqPrice = Number (input[0]);
const tsatsaPrice = Number (input[1]);
const palamudKg = Number (input[2]);
const safridKg =Number (input[3]);
const midiKg = Number (input[4]);
const palamudPrice = skumriqPrice + skumriqPrice * 0.60;
const safridPrice = tsatsaPrice + tsatsaPrice * 0.80;
const midiPice = 7.50;
const totalPalamud = palamudKg * palamudPrice;
const totalSafrid = safridKg * safridPrice;
const totalMidi = midiKg * midiPice;
const totalPrice = totalPalamud + totalSafrid + totalMidi;
console.log(totalPrice.toFixed(2));
}
fishland(["6.90","4.20","1.5","2.5","1"]);