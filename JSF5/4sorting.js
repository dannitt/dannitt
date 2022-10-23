function sorting(arr) {
let newArr = []
let sortedArr = arr.sort((a,b) =>{
    return a - b
});
//console.log(sortedArr)
while (sortedArr.length >0){
    let elMax = sortedArr.pop()
    let elMin = sortedArr.shift()
    newArr.push(elMax);
    newArr.push(elMin);
    
}
console.log(newArr.join(" "))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])	//94 1 69 2 63 3 52 18 31 21