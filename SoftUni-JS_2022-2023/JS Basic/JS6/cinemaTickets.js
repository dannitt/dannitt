function cinemaTickets(input){
let index = 0
let inputline = input[index];
let countStandardTik = 0
let countKidTik = 0
let countStudentTik = 0

while (inputline !== "Finish"){
    let movieName = input[index]
    index++
    let allTik = Number(input[index])
    let freeSpase = allTik
    index++
    let tikType = input[index]
    while (tikType !== "End"){
        switch (tikType){
            case "student" :
                countStudentTik++
                break
            case "kid" :
                countKidTik++
                break
            case "standard" :
                countStandardTik++
                break
        }
        freeSpase--
        if (freeSpase === 0){
            break
        }
        index++
        tikType = input[index]
    }
    let boughtTik = allTik - freeSpase
    let percFull = boughtTik / allTik * 100
    console.log(`${movieName} - ${percFull.toFixed(2)}% full.`)
    index++
    inputline = input[index]
}
let allBoughtTik = countKidTik + countStandardTik + countStudentTik
console.log(`Total tickets: ${allBoughtTik}`)
console.log(`${(countStudentTik / allBoughtTik*100).toFixed(2)}% student tickets.`)
console.log(`${(countStandardTik / allBoughtTik*100).toFixed(2)}% standard tickets.`)
console.log(`${(countKidTik / allBoughtTik*100).toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
