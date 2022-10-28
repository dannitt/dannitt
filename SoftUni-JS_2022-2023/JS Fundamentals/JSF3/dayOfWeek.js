function dayOfWeek(num) {
    let arrM = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (num <= 0 || num > arrM.length) {
        console.log(`Invalid day!`)
    } else {
        console.log(arrM[num-1])
    }
}
dayOfWeek(8)