function sumsPositiveNegative(input) {
let index = 0;
let num = input[index];

let primeNumSum = 0
let nonPrimeNumSum = 0

while (num !== "stop"){
    let currNum = Number(num)
        if(currNum <0){
            console.log(`Number is negative.`)
            
        } else {
        let isPrime = true;
        for (let i=2; i<currNum; i++){
            if(currNum % i === 0){
                isPrime = false;
                break;
            }
            
        }
        if(isPrime){
            primeNumSum += currNum;
        } else {
            nonPrimeNumSum += currNum;
        }
    }
        index++
        num = input[index];
    }
        
          
    
console.log(`Sum of all prime numbers is: ${primeNumSum}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`)
}
sumsPositiveNegative(["30",
"83",
"33",
"-1",
"20",
"stop"])


