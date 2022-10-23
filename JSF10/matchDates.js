function matchDates(data) {
    let date = data[0]
    let pattern = /(?<day>\d{2})([/|.|-])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g
    let valid = pattern.exec(date)
    //let arr = []
    while (valid !== null){
       // arr.push(valid[0])
        let currDay = valid.groups['day']
        let currMonth = valid.groups['month']
        let currYear = valid.groups['year']
        
        console.log(`Day: ${currDay}, Month: ${currMonth}, Year: ${currYear}`)
        valid = pattern.exec(date)
    }
    //console.log(arr.join(" "))
    
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])