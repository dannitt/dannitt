function arrayManipulations(commands) {
    let arr = commands.shift()
        .split(' ')
        .map(Number);
   // console.log(arr)
    for (let i = 0; i < commands.length; i++) {
        let [command, num, el] = commands[i].split(' ');
        el = Number(el);
        num = Number(num)
        switch (command) {
            case "Add": arr.push(num); break
            case "Remove":
                for (let el of arr) {
                    arr = arr.filter(el => el != num)
                }; break
            case "RemoveAt": arr.splice(num, 1); break
            case "Insert": arr.splice(el, 0, num); break
        }
    }
    console.log(arr.join(" "))
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])