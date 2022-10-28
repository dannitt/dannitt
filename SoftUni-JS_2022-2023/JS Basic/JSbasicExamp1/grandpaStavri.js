function grandpaStavri(input) {
let index = 0;
let day = Number(input[index]);
index++

let counterDegrees = 0
let counterLitres = 0
for (let i = 1; i <= day; i++ ){ 
let liter = Number(input[index]);
index++
let degrees = Number(input[index]);
index++
 counterLitres += liter
 let degreesLiter = liter * degrees;
 counterDegrees = counterDegrees + degreesLiter
  }
console.log(`Liter: ${counterLitres.toFixed(2)}`)
console.log(`Degrees: ${(counterDegrees / counterLitres).toFixed(2)}`)
let avgDegrees = counterDegrees / counterLitres
if (avgDegrees <= 38){
    console.log(`Not good, you should baking!`)
} else if (avgDegrees >38 && avgDegrees <= 42){
    console.log(`Super!`)
} else if(avgDegrees > 42){
    console.log(`Dilution with distilled water!`)
}
}
grandpaStavri(["2",
"200",
"43",
"200",
"40"])
