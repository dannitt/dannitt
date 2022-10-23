function addressBook(data) {
let myArr = {}
for (let line of data){
    let [name, address] = line.split(":");
    myArr[name] = address
}
let unsortedKeys = Object.keys(myArr)
let sortedKeys = unsortedKeys.sort((a,b)=>{
    return a.localeCompare(b)
})
    for (let key of sortedKeys){
        console.log(key, "->", myArr[key] )
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)