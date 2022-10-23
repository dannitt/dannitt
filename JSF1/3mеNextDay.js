function nextDay(year, month, day) {
    let nextDay = day
    let nextMonth = month
    let nextYear = year

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day !== 31) {
            nextDay = Number(day) + 1
        } else {
            nextMonth = Number(month) + 1
            nextDay = 1
        }

    } else {
        if (day === 28 && month === 2) {
            if (Number(year) % 4 === 0) {
                nextMonth = month
                nextDay = 29
            } else {
                nextMonth = Number(month) + 1
                nextDay = 1
            }
        }
            if (day === 29 && month === 2) {
            nextMonth = Number(month) + 1
            nextDay = 1
            } else {
            nextDay = Number(day) + 1
            }
    }

        if (month === 12 & day === 31) {
            nextYear = Number(year) + 1
            nextMonth = 1
        } else {
            nextYear = year
        }
        if (day === 30) {
            nextMonth = Number(month) + 1
            nextDay = 1
        }
        if (Number(year) < 1900){
            nextYear = 1900 + Number(year)
        }
        console.log(`${nextYear}-${nextMonth}-${nextDay}`)
    }
    nextDay(1, 1, 1)