function dictionary(data) {
    let wordDifinitions = data[0].split("| ")
    let notebook = new Map()
    let res = []
    for (let line of wordDifinitions) {
        let [searchedWord, definition] = line.split(": ")
        if (notebook.has(searchedWord)) {
            let newDefinition = notebook.get(searchedWord)
            notebook.set(searchedWord,[newDefinition,definition])
            
        } else {
            notebook.set(searchedWord, definition)
        }
    }
    let words = data[1].split(" | ")
    let command = data[2]
    if (command === "Hand Over") {
        for (let key of Array.from(notebook.keys())) {
            
            res.push(key)
                 
        }
        console.log(res.join(" "))
    }
    if (command === "Test") {
        for (let el of words) {
            for (let key of Array.from(notebook.keys())) {
                if (key === el) {
                    console.log(`${key}:`)
                    for ( let element of notebook.get(key)){
                        console.log(` -${element}`)   
                    }
                    
                }
            }
        }
    }
}



dictionary((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])
)


