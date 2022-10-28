function pyramid(input) {
let num = Number(input[0])
let current = 0;
let isBigger = false;
for (let r = 1; r<= num; r++){
    let res = " ";
    for (let n=1; n<=r; n++){  
        
        current++  
        res += current + " "   
        if (current === num){
        isBigger = true
        break
    }
    }  
    console.log(res)  
    if(isBigger){
        break
    } 
    }
     
}
pyramid(["7"])