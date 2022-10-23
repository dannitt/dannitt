function palindromeIntegers(arr) {
    
    for (let el of arr) {
        let currElAsString = String(el)
        let reversedEl = String(el).split("").reverse().join("");
        if (currElAsString === reversedEl) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
palindromeIntegers([123, 323, 421, 121])