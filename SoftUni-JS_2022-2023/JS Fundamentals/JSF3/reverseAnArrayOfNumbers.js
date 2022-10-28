function reverseAnArrayOfNumbers (n, arr) {
let arrNew = []
for ( let i=n-1; i>=0; i-- ){
    arrNew.push(arr[i])
    
}
console.log(arrNew.join(" "))
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])