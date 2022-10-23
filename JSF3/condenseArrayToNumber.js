function condenseArrayToNumber(arr) {
    let arrNew = []
    let tempArr = []
    for (let el of arr) {
        arrNew.push(el)
    }
    while (arrNew.length >1) {
        tempArr = []
        for (let i = 0; i < arrNew.length-1; i++) {
            tempArr[i] = arrNew[i] + arrNew[i + 1] 
        }
        arrNew = tempArr
    }
    console.log(arrNew.join())
}
condenseArrayToNumber([5,0,4,1,2])