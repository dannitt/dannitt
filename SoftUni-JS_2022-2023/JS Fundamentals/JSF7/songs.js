function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }
    }
    let numSongs = arr[0]
    let arrL = arr.length
    let lastList = arr[arrL - 1]

    for (let i = 1; i <= numSongs; i++) {
        let [typeList, name, time] = arr[i].split("_")
        let mySong = new Song(typeList, name, time)
        if (typeList === lastList || lastList === "all"){
            console.log(name)
        } 
    }       
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']  
)