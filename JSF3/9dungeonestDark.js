function dungeonestDark(arr) {
    arrNew = []
    for (el of arr) {
        let txt = ""
        let txt1 = ""
        for (let i = 0; i < el.length; i++) {

            txt = el[i]
            if (txt !== "|") {
                txt1 += txt
            } else if (txt === "|"){
                arrNew.push(txt1)
                //console.log(arrNew)
                
                txt1 = ""
            }
            //for ( let element of arrNew){
             //   console.log(element)
           // }
        }
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])