function repeatString(str, num) {
let arr = []
for ( let i=1; i<=num; i++){
    arr.push(str);
}
console.log(arr.join(""))
}
repeatString("String", 2)