function building(input) {
let floor = Number(input[0]);
let room = Number(input[1]);
for (let f = floor; f> 0; f--){
    let res = "";
    for (let r=0; r< room; r++){
if (f === floor){
    res += `L${f}${r} `
} else if (f % 2 === 0){
    res += `O${f}${r} `
} else {
    res += `A${f}${r} `
   }
    }
    console.log(res)
}
}
building(["4", "4"])