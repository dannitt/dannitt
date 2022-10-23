function friendListMaintenance(data) {
    let friends = data.shift().split(", ")
    let blacklistedNames = []
    let blacklistedNamesNum = 0
    let lostDueErr = []
    let lostNames = 0
    let index = 0
    let command = data[index]
    index++
    while (command !== "Report") {
        let input = command.split(" ")
        let operation = input.shift()
        switch (operation) {
            case "Blacklist":
                for (let f = 0; f < input.length; f++) {
                    let el = input[f]
                    if (friends.includes(el)) {
                        console.log(`${el} was blacklisted.`)
                        blacklistedNamesNum++
                        blacklistedNames.push(el)
                    } else {
                        console.log(`${el} was not found.`)
                    }
                    command = data[index]
                    index++
                }
                break;
            case "Error":
                let i = Number(input[0])
                if (i < 0 || i > friends.length) {
                    command = data[index]
                    index++
                    continue;
                }
                let lost = friends[i]
                if (!blacklistedNames.includes(lost) && !lostDueErr.includes(lost)) {
                    console.log(`${lost} was lost due to an error.`)
                    lostDueErr.push(lost)
                    lostNames++
                    command = data[index]
                    index++
                } else {
                    command = data[index]
                    index++
                    continue
                }
                break;
            case "Change":
                let curr = Number(input[0])
                if (curr < 0 || curr > friends.length - 1) {
                    command = data[index]
                    index++
                    continue;
                }
                let name = friends.splice(curr, 1, input[1])
                let newName = input[1]
                console.log(`${name} changed his username to ${newName}.`)
                command = data[index]
                index++
                break
        }
    }
    console.log(`Blacklisted names: ${blacklistedNamesNum}`)
    console.log(`Lost names: ${lostNames}`)
    for (let m = 0; m < friends.length; m++) {
        let nameL = friends[m]
        if (lostDueErr.includes(nameL)) {
            friends.splice(m, 1, "Lost")
        }
    }
    for (let g = 0; g < friends.length; g++) {
        let nameB = friends[g]
        if (blacklistedNames.includes(nameB)) {
            friends.splice(g, 1, "Blacklisted")
        }
    }
    console.log(`${friends.join(" ")}`)
}
friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])








