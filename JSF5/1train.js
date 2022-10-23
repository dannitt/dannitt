function train(commands) {
    let arr = commands.shift()
        .split(' ')
        .map(Number);
    //   console.log(arr)
    for (let i = 1; i < commands.length; i++) {
        let maxPass = Number(commands[0])
        let [command, num] = commands[i].split(' ');
        num = Number(num)

        if (command !== "Add") {
            command = Number(command)
            for (let i = 0; i < arr.length; i++) {
                let numb = Number(arr[i])
                if (numb + command <= maxPass) {
                    let newNumb = numb + command
                    arr.splice(i, 1, newNumb); break
                }
            }
        } else {
            arr.push(num)
        }
    }
    console.log(arr.join(" "))
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)