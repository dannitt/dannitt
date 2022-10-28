function bossRush(data) {
    // |GEORGI|:#Lead architect#
    let n = data.shift()
    let pattern = /\|(?<name>[A-Z]{4,})\|:\#(?<title>[A-Za-z]{1,} [A-Za-z]{1,})\#/gm
    let strength = 0
    let armor = 0
    
    
    for (let i = 0; i<n; i++){
        
        let res = data[i]
        let match = pattern.exec(res)
        if (match === null){
            console.log(`Access denied!`)
        }
        while (match !== null){
            
            let arr = []
            let arrTwo = []
            let validName = match.groups['name']
            let validTitle = match.groups['title']
            arr.push(validName)
            arrTwo.push(validTitle)
            // if ( res !== match){
            //     console.log(`Access denied!`)
                
           // }
            match = pattern.exec(res)
            console.log(`${arr.join(" ")}, The ${arrTwo.join(" ")}`)
        for (let el of arr){
            strength = el.length
        }
        console.log (`>> Strength: ${strength}`)
        for ( let el of arrTwo){
            armor = el.length
        }
        console.log(`>> Armor: ${armor}`)
        }
        
    }
}
    bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])