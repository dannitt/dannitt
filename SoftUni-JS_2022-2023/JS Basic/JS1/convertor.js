function convertor(input){
    let amountUsd = Number(input[0]);
    let course = Number(1.79549);
    let amountBgl = amountUsd * course;
        console.log(`${amountBgl}`);
    }
    convertor([22])