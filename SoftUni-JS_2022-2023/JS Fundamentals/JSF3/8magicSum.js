function magicSum(arr, n) {
    
    for ( let i=0; i<arr.length; i++){
        let num1 = arr[i]
        for ( let j=i+1 ; j<arr.length; j++){
            let num2 = arr[j]
            let sum = num1 + num2
            if ( sum === n){
                console.log(`${num1} ${num2}`)
            }
        }  
    }
} 
magicSum([1, 2, 3, 4, 5, 6], 6)