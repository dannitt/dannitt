function addAndSubtract(arr) {
    let resEven = 0
    let resOdd = 0
    let resArr = 0
    let resArrNew = 0
    let arrNew = []
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])
        resArr += num
        if (num % 2 === 0) {
            resEven = num + i
            arrNew.push(resEven)
        } else {
            resOdd = num - i
            arrNew.push(resOdd)
        }
    }
    console.log(arrNew)
    console.log(resArr)
    for (let i = 0; i < arrNew.length; i++) {
        let num = Number(arrNew[i])
        resArrNew += num
    }
    console.log(resArrNew)
}
addAndSubtract([-5, 11, 3, 0, 2])