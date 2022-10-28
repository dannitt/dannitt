function reverseInPlace(arr) {
    let res = ""
    let k = arr.length -1
    for ( let i=0; i<arr.length /2; i++, k--){
    res = arr[i]
    arr[i] = arr[k]
    arr[k] = res 
    }
    console.log(arr.join(" "))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])