function nxnMatrix(n) {
let matrix = []
for (let i=0; i<n; i++){
    let row = []
    for (let k = 0; k< n; k++){
    row.push(n)
}
matrix.push(row.join(" "))
}
console.log(matrix.join("\n"))
}
nxnMatrix(3)