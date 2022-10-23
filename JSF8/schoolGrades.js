function schoolGrades(data) {
    let myMap = new Map();
    for (let line of data) {
        let info = line.split(" ")
        let name = info.shift()
        let setOfGrades = info
        if (!myMap.has(name)) {
            myMap.set(name, setOfGrades)
        } else {
            let oldSet = myMap.get(name)
            for (let grade of setOfGrades) {
                oldSet.push(grade)
            }
            myMap.set(name, oldSet)
        }
    }
    let sortEntries = Array.from(myMap.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [k, v] of sortEntries) {
        let sumGrade = 0
        for (grade of v) {
            sumGrade += Number(grade)

        }
        let avg = sumGrade / v.length
        console.log(`${k}: ${avg.toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)