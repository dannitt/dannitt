function loadingBar(n) {
let full = "%".repeat(n/10)
let empty = ".".repeat(10 - full.length);
if ( empty.length === 0){
    console.log(`${n}% Complete!`)
    console.log(`[${full}]`)
} else {
    console.log(`${n}% [${full}${empty}]`)
    console.log(`Still loading...`)
}
}
loadingBar(100)