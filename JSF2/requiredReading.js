function requiredReading(numPages, pagesPerHour, days) {
let pagesPerDay = numPages / days;
let hoursPerDay = pagesPerDay / pagesPerHour
    console.log(hoursPerDay)
}
requiredReading(432, 15 , 4)