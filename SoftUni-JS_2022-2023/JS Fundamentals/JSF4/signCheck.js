function signCheck(n1, n2, n3) {
    let res = 0

    if (n1 < 0) {
        res++
    }
    if (n2 < 0) {
        res++
    }
    if (n3 < 0) {
        res++
    }
    if (res % 2 === 0) {
        console.log("Positive")
    } else {
        console.log("Negative")
    }
}
signCheck(5, -12, -15)