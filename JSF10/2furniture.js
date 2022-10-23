function furniture(input) {
//">>{furniture name}<<{price}!{quantity}"
let pattern = /[>]{2}(?<furniture>[A-Z]+[A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm
let text = input.join(" ")
let myArr = []
let totalSum = 0
let valid;
while((valid = pattern.exec(text)) !== null){
    let validName = valid.groups['furniture']
    let validPrice = valid.groups['price']
    let validQuantity = valid.groups['quantity']
    myArr.push(validName)
    totalSum += (validPrice*validQuantity)
}
console.log(`Bought furniture:`)
myArr.forEach(el => console.log(el))
console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)