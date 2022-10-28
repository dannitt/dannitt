function theBiscuitFactory(data) {
let biscitsPerWorker = data[0];
let countOfWorkers = data[1];
let compFactBiscits = Number(data[2])
let countBiscits = 0

for (let i = 0; i<30; i++){
    let biscitsPerDay = biscitsPerWorker * countOfWorkers;
    if( i%3 === 0){
        biscitsPerDay = Math.floor(biscitsPerDay * 75/100)
    }
    countBiscits += biscitsPerDay
}
console.log(`You have produced ${countBiscits} biscuits for the past month.`)

if (countBiscits >= compFactBiscits){
    let pers = (countBiscits - compFactBiscits)/compFactBiscits *100;
    console.log(`You produce ${pers.toFixed(2)} percent more biscuits.`)
} else {
    pers = (compFactBiscits - countBiscits)/compFactBiscits *100;
    console.log(`You produce ${pers.toFixed(2)} percent less biscuits.`)
}
}
theBiscuitFactory(["163","16","67020"])