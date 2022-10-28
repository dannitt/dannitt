function processOddNumbers(arr) {
let oddNum = arr.filter((el, i)=> i%2 === 1)
            .map(x => x*2)
            .reverse()
console.log(oddNum.join(" "))
}
processOddNumbers([10, 15, 20, 25])