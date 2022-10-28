function wordTracker(data) {
    let result = new Map()
    let words = data.shift().split(" ")
    for (let word of words) {
       result.set(word,0)
    }
    for (let word of data){
        if (result.has(word)){
            let oldValue = result.get(word)
            result.set(word, oldValue + 1)
        }
    }
    let sorted = Array.from(result).sort((a,b)=>{ return b[1]-a[1]})
    for (let key of Object(sorted))
    console.log (`${key[0]} - ${key[1]}`)
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 
    'count', 'the', 'occurrences', 'of', 'the', 'words', 
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
    