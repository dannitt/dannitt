function revealWords(words, sentence) {
    let searchWord = words.split(", ")
    let sentenceWords = sentence.split(" ")
    for (let word of searchWord) {
        for (let el of sentenceWords) {

            if (word.length === el.length && el.includes("*")) {
                sentence = sentence.replace(el, word)
            }
        }
    }
    console.log(sentence)
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)