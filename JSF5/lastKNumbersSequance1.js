function lastKNumbersSequance1(n, k) {
let res = [1]
for (let i = 1; i<n; i++){
    let result = res.slice(-k)
    let sum = 0
    for ( let el of result){
        sum += el;
        }
        res.push(sum)
}
console.log(res.join(" "))
}
lastKNumbersSequance1(6, 3)