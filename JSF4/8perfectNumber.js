function perfectNumber(num) {
let sumDiv = 1
for ( let i = 2; i< num; i++){
    if ( num % i === 0){
        sumDiv += i
    }
}
if ( sumDiv === num){
    console.log(`We have a perfect number!`)
} else {
    console.log(`It's not so perfect.`)
}
}
perfectNumber(1236498)