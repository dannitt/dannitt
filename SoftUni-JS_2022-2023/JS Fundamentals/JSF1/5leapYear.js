function leapYear(n) {
    if (n%100 !==0 && n%4 ===0 || n%400 ===0){
         console.log("yes")
    } else {
        console.log("no")  
    }
}
leapYear(2000)