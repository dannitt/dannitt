function bestPlayer(input) {
    let index = 0
    let numGoals = 0
    let bestName = ""
    let isBest = false
    let command = input[index]
    //index++
    while (command !== "END") {
        let name = command;
        index++
        let goals = Number(input[index]);
        index++
        if (goals >= 10) {
            isBest = true
            console.log(`${name} is the best player!`)
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
            break
        }
        if (numGoals < goals) {
            numGoals = goals;
            bestName = name;
        }
        command = input[index]
    }
    if (!isBest) {
        if (numGoals >= 3) {
            console.log(`${bestName} is the best player!`)
            console.log(`He has scored ${numGoals} goals and made a hat-trick !!!`)
        } else {
            console.log(`${bestName} is the best player!`)
            console.log(`He has scored ${numGoals} goals.`)
        }
    }
}
bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "1",
    "END"])



