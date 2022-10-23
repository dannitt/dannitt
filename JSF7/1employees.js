function employees(arr) {
    let myObj = {}
    for (let el of arr) {
        let name = el
        let num = el.length
        myObj.name = name;
        myObj.num = num
        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.num}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])