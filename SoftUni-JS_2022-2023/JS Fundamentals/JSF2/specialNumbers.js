function specialNumbers(n) {
let res = 0
let m = ""
for (let i=1; i<=n; i++){
    let iString = String(i)
    for (let j=0; j<iString.length; j++){
        let num = Number(iString[j]);
        res += num;
        }
if (res === 5 || res === 7 || res === 11){
    console.log(`${i} -> True`)
    res = 0
} else {
    console.log(`${i} -> False`)  
    res = 0
}
}
}
specialNumbers(20)