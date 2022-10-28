function bombNumbers(arrNum, arrBomb) {
    let bombNum = arrBomb[0]
    let numBombed = arrBomb[1]

    while( arrNum.indexOf(bombNum)>=0){
        let baseIndex = arrNum.indexOf(bombNum)
        let startIndex = baseIndex - numBombed
        let itemsToDel = numBombed * 2+1
        if (startIndex < 0){
            startIndex = 0
            itemsToDel = baseIndex + 1 + numBombed
        } else if (baseIndex + numBombed > arrNum.length){
            itemsToDel = arrNum.length - startIndex
        }
        arrNum.splice(startIndex, itemsToDel)
    }

//    for (let i = 0; i < arrNum.length; i++) {
  //      if (arrNum[i] === bombNum) {
//
  //          arrNum.splice(i + 1, numBombed)
    //        if (i > numBombed) {
      //          arrNum.splice(i - numBombed, numBombed + 1)
        //    } else {
          //      arrNum.splice(0, i + 1)
            //}
       // }
   // }
    let sum = 0
    for (let el of arrNum) {
        el = Number(el)
        sum += el
    }
   // console.log(arrNum)
    console.log(sum)
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]  
)