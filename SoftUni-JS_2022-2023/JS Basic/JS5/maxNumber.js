function maxNumber(input) {
let index = 0;
let comm = input[index];
index++
let maxNumb = Number.MIN_SAFE_INTEGER;
while(comm !== "Stop"){
    let num = Number(comm);
    if(num > maxNumb){
        maxNumb = num;
    }
comm = input[index];
index++
}
console.log(maxNumb)
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])