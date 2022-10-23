function extractFile(input) {
    let words = input.split("\\")
    let name = words[words.length-1].split(".")
    let extension = name.pop()
    name = name.join(".")
    
    console.log (`File name: ${name}`)
    console.log(`File extension: ${extension}`)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')