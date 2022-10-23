function searchForANumber(arr, commands) {
    let numElTaken = commands[0]
    let numElDel = commands[1]
    let numSearched = commands[2]
    let count = 0
    let newArr = []
    newArr = arr.splice(0, numElTaken)
    newArr.splice(0, numElDel)
    //console.log(newArr)
    for (let el of newArr) {
        if (el === numSearched) {
            count++
        }
    }
    console.log(`Number ${numSearched} occurs ${count} times.`)
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)