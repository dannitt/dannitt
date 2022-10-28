function stringManipulator(data) {
    let input = data.shift()
    let line = data.shift()
    while (line !== "End"){
        let [action, firstParam, lastParam] = line.split(" ")
        let startIndex
        let endIndex
        switch (action){
            case "Translate" :
                for (let el of input){
                    if (el === firstParam){
                        input = input.replace(firstParam,lastParam)
                    }     
                }
                console.log(input)
                break 
            case "Includes" :
                if (input.includes(firstParam)){
                    let res = "True"
                    console.log(res)
                }
                    res = "False"
                    console.log(res)
                    break
            case "Start" :
                if (input.startsWith(firstParam)){
                let res = "True"
                    console.log(res)
                } else {
                    res = "False"
                    console.log(res)
                    
                }
                break
                case "Lowercase" :
                    input = input.toLowerCase()
                    console.log(input)
                    break
                case "FindIndex" :
                    let index = input.lastIndexOf(firstParam)
                    console.log(index)
                    break
                case "Remove" :
                    first = Number(firstParam)
                    last = Number(lastParam)
                    let substr = input.substring(first,last)
                    input = input.replace(substr,"")
                    console.log(input)
                    break;
        }
        line = data.shift()
    }
}
stringManipulator((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
)