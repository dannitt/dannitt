function deposit(input){
    let sume = Number(input[0]);
    let months = Number(input[1]);
    let lihva = Number(input[2]);
    let amntLihva = sume * lihva / 100;
    let amounts = sume + months*amntLihva/12;
    console.log(`${amounts}`);
    }
    deposit(["2350", "6", "7"])