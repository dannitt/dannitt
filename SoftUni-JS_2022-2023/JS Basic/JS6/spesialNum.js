function spesialNum(input) {
let num = Number(input[0]);
let res = ""
for (let i = 1111; i<=9999; i++){
    let newI = "" + i;
    let f = Number(newI[0])
    let j = Number(newI[1])
    let a = Number(newI[2])
    let b = Number(newI[3])
    if (num % f === 0 && num % j === 0 && num % a === 0 &&  num % b === 0){
     f = "" + f   
     j = "" + j
     a = "" + a
     b = "" + b
     res +=`${f}${j}${a}${b} `
     } 
     
     
     
}
console.log(res)
}
spesialNum(["3"])