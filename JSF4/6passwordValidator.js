function passwordValidator(password) {
    let elPassword = String(password).split("");
    let passL = elPassword.length
    let isValid = true
    let numNum = 0
    if (passL > 10 || passL < 6) {
        isValid = false
        console.log(`Password must be between 6 and 10 characters`);
    }
    for (let i = 0; i < passL; i++) {
        let char = elPassword[i]
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
            || char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
            || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            isValid = true
        } else {
            isValid = false
            console.log(`Password must consist only of letters and digits`)
            break
        }
    }
    for (let i = 0; i < passL; i++) {
        let char = elPassword[i]
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
            numNum++
        }
    }
    if (numNum < 2) {
        console.log(`Password must have at least 2 digits`)
        isValid = false
    }
    if (isValid) {
        console.log(`Password is valid`)
    }
}
passwordValidator('Pa$s$s')