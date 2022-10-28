function meetings(data) {
let myArr = {};
for (let line of data){
    let [day,name] = line.split(" ")
    
    if (myArr.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`)
    } else {
        myArr[day] = name
        console.log(`Scheduled for ${day}`)
    }
    
}
for (let key in myArr){
    console.log(key, "->", myArr[key])
}
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)