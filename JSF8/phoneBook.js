function phoneBook(data) {
let myArr = {}
for (let line of data){
    let [name, phoneNum]= line.split(" ");
    myArr[name] = phoneNum
}
for (let keys in myArr){
    console.log(keys, "->", myArr[keys])
}
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)