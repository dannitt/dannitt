function operationsBetweenNumbers(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    const operator = input[2];
    let rezult = 0;
switch (operator) {
    case "-" : rezult = n - m; break;
    case "+" : rezult = n + m; break;
    case "*" : rezult = n * m; break;
    case "/" :
        if (m !== 0){
     rezult = n / m;   
        } else {
            console.log(`Cannot divide ${n} by zero`);
        } break;
    case "%" :
        if (m !== 0){
        rezult = n % m;   
           } else {
               console.log(`Cannot divide ${n} by zero`);
           } break;
    
} 
//console.log(rezult)
if (operator === "-" || operator === "+" || operator === "*") {
    if (rezult % 2 === 0) {
        console.log(`${n} ${operator} ${m} = ${rezult} - even`);  
    } else { 
            console.log(`${n} ${operator} ${m} = ${rezult} - odd`);  
        }
} else if (operator === "/" && m !== 0) {
    console.log(` ${n} ${operator} ${m} = ${rezult.toFixed(2)}`);
} else if (operator === "%" && m !== 0) {
    console.log(`${n} % ${m} = ${rezult}`);
}
}
operationsBetweenNumbers(["10", "0", "%"])