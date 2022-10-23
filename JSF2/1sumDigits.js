function sumDigits(n) {
let num = String(n);
let res = 0;
for ( let i=0; i<num.length; i++){
    res += Number(num[i])
}
console.log(res)
}
sumDigits(97561)