function oddOccurrences(data) {
    let result = new Map;
    let words = data.split(" ")
    for (let word of words) {
        word = word.toLowerCase()
        if (!result.has(word)) {
            let num = 1
            result.set(word, num)
        } else {
            oldNum = result.get(word)
            result.set(word, oldNum + 1)
        }
    }
    let filterResult = Array.from(result).filter(([key,value])=>{
        return value%2 !== 0
    })
    let buff = " "
    for (let [key,value] of filterResult){
        buff += key + " "
        
    }
    console.log(buff)
    }
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')