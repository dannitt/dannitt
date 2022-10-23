function sumOfOddNumbers(n) {
    let counter = 1;
    let totalSum = 0;
    let i=1
    if (i>=1 && i<=100){
        while (counter<=n){ 
            console.log(i);
            counter ++
            totalSum+=i  
            i+=2 
    }         
} console.log(`Sum: ${totalSum}`)
}
sumOfOddNumbers(3)