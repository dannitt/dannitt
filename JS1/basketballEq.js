function basketballEq (input){
    const tax = Number (input[0]);
    const snikers = tax - tax * 0.4;
    const cloths = snikers - snikers * 0.20;
    const ball = cloths / 4;
    const access = ball / 5;
    const totalCost = snikers + cloths + ball + access + tax;
    console.log (totalCost);
}
basketballEq (["365"]);