function rightPlace(word1, char, word2) {
let res = "";
for (let i = 0; i < word1.length; i++) {
let currChar = word1[i];
if (currChar === "_"){
    res+= char
} else {
    res += currChar;
    }
    }
    if(res === word2){
        console.log(`Matched`)
    } else {
console.log(`Not Matched`)
    }
}
rightPlace('Str_ng', 'I', 'StrIng')