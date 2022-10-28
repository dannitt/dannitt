function bonusScore (input){
    const score = Number (input[0]);
    let bonus = 0.0;
    let bonusB =0.0;
    if (score <= 100){
        bonus = 5;  
    } else if (score <= 1000){
        bonus = score * 20 / 100;
    } else {
        bonus = score * 10 /100;
    }
    if (score % 2 === 0){
        bonusB = 1;
         } else  if (score % 5 === 0){
             bonusB = 2;
            } else {
                bonusB = 0;
            }
    console.log(bonus + bonusB);
    console.log(bonus + bonusB + score);
}
bonusScore(["15875"])