function substitute(input) {
let k = Number(input[0]);
let l = Number(input[1]);
let m = Number(input[2]);
let n = Number(input[3]);
let counter = 0
let isValid = false
for (let i= k; i<9; i++){
   for (let j = 9; j>=l; j--){
      for (let a = m; a<9; a++){
        for (b =9 ; b>=n; b--){
       if (i % 2 === 0 && a % 2 === 0 && j % 2 !== 0 && b % 2 !== 0){
           counter++
           if (i === a && j === b){
           
            console.log(`Cannot change the same player.`) 
           }else {
           console.log(`${i}${j} - ${a}${b}`)   
           }      
           }
           if (counter >=6){
            isValid = true
            break 
          }
           }  
        } 
        } 
        if(isValid){
            break 
        }   
    } 
} 
substitute(["6",
"7",
"5",
"6"])







