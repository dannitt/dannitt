function sortNumbers (a,b,c) {
   let numA = Number(a)
   let numB = Number(b)
   let numC = Number(c)
   let arr = []
   arr.push(numA)
   arr.push(numB)
   arr.push(numC)
let sortedArr = arr.sort((a,b) =>{
return b - a
});
console.log(sortedArr.join("\n")) 
}
sortNumbers(2,1,3)