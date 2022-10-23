function formatGrade(grade) {
    let mark = grade.toFixed(2)
    let result;
    if (grade < 3.00){
        result = "Fail"
        mark = 2;
    } else if (grade < 3.50){
        result = "Poor"
    } else if (grade < 4.50){
        result = "Good"
    } else if (grade < 5.50){
        result = "Very good"
    } else {
        result = "Excellent"
    }
console.log(`${result} (${mark})`)
}
formatGrade(3.33)