function oddAndEvenSum(num) {
let number = String(num)
let oddSum = 0
let evenSum = 0
for (let el of number){
    currNumber = Number(el)
    if ( currNumber % 2 === 0){
        evenSum += currNumber;
    } else {
        oddSum += currNumber;
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)