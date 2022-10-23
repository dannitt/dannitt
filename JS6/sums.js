function sums(input){
let start = (input[0]);
let end =(input[1]);
let currNum = " ";
let printline = " ";
for (let i = start; i<=end; i++){
    let currNum = " " + i
    let sumch = 0;
    let sumNch = 0
    for(let j = 0; j< currNum.length; j++){
        let currDigit = Number(currNum.charAt(j))
if (j % 2 === 0){
        sumch+= currDigit
} else {
        sumNch+= currDigit
}
    }
    if (sumch === sumNch)
    printline += `${i} `
}


console.log(printline)
}
sums(["100000",
"100050"])
