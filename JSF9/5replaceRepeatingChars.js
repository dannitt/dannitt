function replaceRepeatingChars(input){
    let text = input[0]
    for ( let i=1; i<input.length; i++){
        if (input[i-1] !== input[i]){
            text += input[i]
        }
    }
    console.log(text)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')