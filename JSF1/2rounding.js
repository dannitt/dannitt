function rounding(num, n) {
    if (n<=15){
    console.log(parseFloat(num.toFixed(n)))
} else {
    console.log(parseFloat(num.toFixed(15)))    
}
}
rounding(3.14, 14)