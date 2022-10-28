function trekkingMania(input) {
let index = 0;
let numGroups = Number(input[index]);
index++;
let group5Counter = 0;
let group12Counter = 0;
let group25Counter = 0;
let group40Counter = 0;
let group41Counter = 0;
let grPer = 0;
for (let i=1; i<= numGroups; i++){
    let numPerson = Number(input[index]);
    index++;
    
 if (numPerson <= 5){
        group5Counter += numPerson;
    } else if(numPerson > 5 && numPerson <=12) {
        group12Counter += numPerson;
    } else if (numPerson > 12 && numPerson <=25) {
        group25Counter += numPerson;
    } else if (numPerson > 25 && numPerson <=40) {
        group40Counter += numPerson;
    } else {
        group41Counter += numPerson;
    }
   } 
grPer = group5Counter + group12Counter + group25Counter + group40Counter + group41Counter;

let group5Pers = group5Counter / grPer * 100;
let group12Pers = group12Counter / grPer * 100;
let group25Pers = group25Counter / grPer * 100;
let group40Pers = group40Counter / grPer * 100;
let group41Pers = group41Counter / grPer * 100;
console.log(`${group5Pers.toFixed(2)}%`);
console.log(`${group12Pers.toFixed(2)}%`);
console.log(`${group25Pers.toFixed(2)}%`);
console.log(`${group40Pers.toFixed(2)}%`);
console.log(`${group41Pers.toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
