function inchToSm (input){
    let inch = Number (input[0]);
    let index = 2.54
    let sm = inch * index;
    console.log(sm);
}
inchToSm(["5"])