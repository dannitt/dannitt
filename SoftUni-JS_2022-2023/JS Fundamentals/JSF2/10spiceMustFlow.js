function spiceMustFlow(spices) {
let res = 0
let day = 0
let total = 0
while ( spices >= 100){
 res = spices - 26
 total += res
 day++
 spices -= 10
}
console.log(day)
if (day !== 0){
    console.log(total-26)
} else {
    console.log(total)
}
}
spiceMustFlow(111)