function houseParty(arr) {
let newArr = []
for ( let el of arr){
    let command = el.split(' ');
    let name = command[0];
    if (command.length === 3){
        if (newArr.includes(name)){
            console.log(`${name} is already in the list!`);
        } else {
            newArr.push(name);
        }
    } else {
        if (!newArr.includes(name)){
            console.log(`${name} is not in the list!`);
        } else {
            let index = newArr.indexOf(name);
            newArr.splice(index,1)
        }
    }
}
console.log(newArr.join("\n"))
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])