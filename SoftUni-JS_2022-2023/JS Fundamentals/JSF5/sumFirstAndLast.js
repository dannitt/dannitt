function sumFirstAndLast(arr) {
let res = 0
    let firstNum = Number (arr[0])
    let lastNum = Number (arr.pop())
res = firstNum + lastNum
    console.log (res)
}
sumFirstAndLast(['20', '30', '40'])