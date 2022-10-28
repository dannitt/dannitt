function smallestTwoNumbers(arr) {
let el = arr.sort((a, b)=> a-b)
let res = arr.slice(0, 2)

console.log(res.join(" "))

}
smallestTwoNumbers([30, 15, 50, 5])