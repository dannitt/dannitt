function arrayRotation(arr, n) {
    let arrNew = []
    let k = arr.length - 1
    while(n> arr.length){
    n = n - arr.length
    }
for (let i=0 ; i<arr.length-n ; i++){
    arrNew.push(arr[i+n]);
}
for (let i=0; i<n; i++){
    arrNew.push(arr[i])
}
console.log(arrNew.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2)