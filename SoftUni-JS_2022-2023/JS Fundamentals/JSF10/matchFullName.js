function matchFullName(input) {
let arr = []
let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g
let name = pattern.exec(input)
while (name !== null){
    arr.push(name[0])
    name = pattern.exec(input)
    }
    console.log(arr.join(" "))
}
matchFullName(`ivan ivanov, Ivan Ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov`)