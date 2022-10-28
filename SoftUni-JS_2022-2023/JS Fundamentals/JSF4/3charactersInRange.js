function charactersInRange(char1, char2) {
let first = Math.min(char1.charCodeAt(0),
char2.charCodeAt(0))
let second = Math.max(char1.charCodeAt(0),
char2.charCodeAt(0))
let chartInRange = []
for (let i = first+1; i< second; i++){
    let currChart = String.fromCharCode(i);
    chartInRange.push(currChart)
}
console.log(chartInRange.join(" "))

}
charactersInRange('d','a')