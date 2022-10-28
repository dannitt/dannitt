function evenAndOddSubtraction(arr) {
    let resEven = 0
    let resOdd = 0
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])
        if (num % 2 === 0) {
            resEven += num
        } else {
            resOdd += num
        }
   }
    res = resEven - resOdd
    console.log(res)
}
evenAndOddSubtraction([2, 4, 6, 8, 10])