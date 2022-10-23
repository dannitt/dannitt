function factorialDivision(m,n) {
let factM = 1
let factN = 1
let res = 0
for ( let i=1; i<=m; i++){
factM *= i
}
for ( let j=1; j<=n; j++){
    factN *= j
}
res = factM / factN
console.log(res.toFixed(2))
}
factorialDivision(6,2)