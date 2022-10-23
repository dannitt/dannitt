function histogram(input) {
let n = Number(input[0]);
let p1Count = 0;
let p2Count = 0;
let p3Count = 0;
let p4Count = 0;
let p5Count = 0;
for(let i=1; i<=n; i++){
    let num = Number(input[i]);
    if(num<200){
        p1Count++;
    } else if(num>=200 && num<=399){
       p2Count++;
    } else if(num>399 && num<=599){
        p3Count++;
    } else if(num>599 && num<=799){
        p4Count++;
   } else {
       p5Count++;
   }
}
let p1Persent = p1Count / n * 100;
let p2Persent = p2Count / n * 100;
let p3Persent = p3Count / n * 100;
let p4Persent = p4Count / n * 100;
let p5Persent = p5Count / n * 100;
console.log(`${p1Persent.toFixed(2)}%`);
console.log(`${p2Persent.toFixed(2)}%`);
console.log(`${p3Persent.toFixed(2)}%`);
console.log(`${p4Persent.toFixed(2)}%`);
console.log(`${p5Persent.toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);