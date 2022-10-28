function binaryDecimal(binNum) {
    newDigit = 0
    let c = 0
    let blength = binNum.length
    for (i = blength - 1; i >= 0; i--) {
        let digit1 = binNum[i]
        let digit = digit1 * Math.pow(2, c)
        c += 1
        newDigit += digit
    }
    console.log(newDigit)
}
binaryDecimal('00001001')