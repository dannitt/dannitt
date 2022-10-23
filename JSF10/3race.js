function race(input) {
    let nameMap = new Map()
    let el = input.shift()
    let names = el.split(", ")
    
    names.forEach(person => {
        nameMap.set(person, 0)
    })
    let patternName = /[A-Za-z]+/g
    let patternDistance = /\d/g
    for (let i=0; i<input.length; i++){
        if (input[i]==="end of race"){
            break
        }
        let currentLine = input[i]
        let name = currentLine.match(patternName).join("")
        let distance = (currentLine.match(patternDistance)).reduce((a,b)=>{
            return Number(a)+Number(b)
        },0)
        if (nameMap.has(name)){
            let prevDistance = nameMap.get(name)
            prevDistance += distance
            nameMap.set(name, prevDistance)
        }
    }
    let sortedNames = Array.from(nameMap).sort((a,b)=>{
        return b[1]-a[1]
    })
    console.log(`1st place: ${sortedNames[0][0]}`)
    console.log(`2nd place: ${sortedNames[1][0]}`)
    console.log(`3rd place: ${sortedNames[2][0]}`)
    }
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
)