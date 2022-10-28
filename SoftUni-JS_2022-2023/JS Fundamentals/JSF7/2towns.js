function towns(arr) {
    let myObj = {}
    for (let el of arr) {
        let town = el.split(" | ")
        let myTown = town[0]
        let myLatitude = Number(town[1]).toFixed(2)
        let myLongitude = Number(town[2]).toFixed(2)
        myObj.town = myTown
        myObj.latitude = myLatitude
        myObj.longitude = myLongitude
        console.log(myObj)
    }
}
towns(['Plovdiv | 136.45 | 812.575'])