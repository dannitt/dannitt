function sumEvenNumbers(arr) {
let res = 0
for ( let i=0; i<arr.length; i++){
    let num = Number(arr[i])
    if (num % 2 === 0){
    res += num
} 

}
console.log(res)
}
sumEvenNumbers(['2','4','6','8','10'])