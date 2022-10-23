function censoredWords(sentence, word) {
    
    let words = sentence.split(word)
    let res = words.join("*".repeat(word.length))
    console.log( res)
    }

censoredWords('A small sentence with some words', 'small')