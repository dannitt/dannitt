function primeNumberChecker(num){
if (num/num === 1 && num%2 !== 0 && num%3 !== 0 && num&5 !==0){
console.log(`true`)
} else{
console.log(`false`)
}
}
primeNumberChecker(81)