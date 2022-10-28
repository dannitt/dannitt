function mergeArrays(arr1, arr2) {
    let res = 0
    let num1 = 0
    let num2 = 0
    let arrNew = []
    isEven = true
    for (let i = 0; i < arr2.length; i++) {
        let num1 = (arr1[i])
        let num2 = (arr2[i])
        if (i % 2 === 0) {
            res = Number(num1) + Number(num2)
            arrNew.push(res)
        } else {
            res = `${num1}${num2}`
            arrNew.push(res)
        }
    }
    console.log(arrNew.join(" - "))
}
mergeArrays(['0', '012', '5', '77', '4'],
    ['22', '3', '5', '122', '44']
)