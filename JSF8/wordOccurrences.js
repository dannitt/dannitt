function wordOccurrences(data) {
    let result = new Map();
    for (let line of data){
        if (!result.has(line) ){
            let num = 1
            result.set(line,num)
            
        } else {
          oldNum=  result.get(line);
          result.set(line,oldNum +1)
        }
    }
    let sorted = Array.from(result).sort((a,b)=>{ return b[1]-a[1]})
    
    for (let key of Object(sorted))
    console.log (`${key[0]} -> ${key[1]} times`)
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])