function triangleOfNumbers(n) {
    let num = n;
    let currNum = 0;
    let isEqual = false;
for (i=1; i<=num; i++){
    let res = ""  
    currNum ++
    for (j=1; j<=i; j++){
      res += currNum + " ";
        }
    if ( currNum === num){
        isEqual = true;         
        }
console.log(res)    
    if  (isEqual){
        break;
      }
    }
}
triangleOfNumbers(3)