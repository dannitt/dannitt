function triplesOfLatinLetters(num) {
 
    for (let i = 0; i < num; i++) {
        let letterA = String.fromCharCode(97 + i)
        for (let j = 0; j < num; j++) {
            let letterB = String.fromCharCode(97 + j)
            for (let k = 0; k < num; k++) {
                let letterC = String.fromCharCode(97 + k)
                console.log(`${letterA}${letterB}${letterC}`)
            }
        }
    }
 
}
triplesOfLatinLetters("2")