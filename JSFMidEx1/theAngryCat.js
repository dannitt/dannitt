function theAngryCat(priceArr, entryPoint, command) {
let index = Number(entryPoint)
let bomb = priceArr[index]
let leftSum=0
let rightSum = 0
switch (command){
case "cheap":
    for (let i=0 ; i<index; i++){
        let numLeft = priceArr[i]
        if(numLeft < bomb){
        leftSum +=numLeft
        }
    }
    for (let j=index+1; j<priceArr.length; j++){
        let numRight = priceArr[j]
        if (numRight < bomb){
        rightSum += numRight
        }
    }
    if (rightSum <= leftSum){
        console.log(`Left - ${leftSum}`)
    } else {
        console.log(`Right - ${rightSum}`)
        
    }
    break;
    case "expensive":
        for (let i=0 ; i<index; i++){
            let numLeft = priceArr[i]
            if(numLeft >= bomb){
            leftSum +=numLeft
            }
        }
        for (let j=index+1; j<priceArr.length; j++){
            let numRight = priceArr[j]
            if (numRight >= bomb){
            rightSum += numRight
            }
        }
        if (rightSum <= leftSum){
            console.log(`Left - ${leftSum}`)
        } else {
            console.log(`Right - ${rightSum}`)
            
        }
        break
}
}
theAngryCat([5, 10, 12, 5, 4, 20],
    3,
    "cheap")
    
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    