function stringSubstring(word, sentence) {
    let wordLower = word.toLowerCase()
    let newSentence = sentence.split(" ") 
    for ( let el of newSentence ) {
        if ( wordLower === el.toLowerCase()){
            console.log(wordLower);
            return
        }
    }
    console.log(`${word} not found!`)
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)