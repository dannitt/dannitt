function amazingNumbers(num) {
let sum = 0;
let num1 = String(num)
for ( let i=0; i<num1.length; i++){
let res = Number(num1[i]);
sum += res
}
let sum2 = String(sum);
let isAmazing = false
for ( let i = 0; i<sum2.length; i++){
let finalNum = Number(sum2[i])
if (finalNum === 9){
    isAmasing = true;
    console.log(`${num} Amazing? True`)
   return;
    }
}
console.log(`${num} Amazing? False`)
}
amazingNumbers(1233)