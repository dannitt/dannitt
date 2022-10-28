function maxNumber(arr) {
    let arrNew = []
    let res = 0
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        res = arr[i]
        let isBigger = true
        for (let k = i + 1; k < arr.length; k++) {
            
            temp = arr[k]
            
            if (res <= temp) {
                isBigger = false
            }
            
        }
        if (isBigger) {
            arrNew.push(res)
        }
    }
    console.log(arrNew.join(" "))
}
maxNumber([14, 24, 3, 19, 15, 17])