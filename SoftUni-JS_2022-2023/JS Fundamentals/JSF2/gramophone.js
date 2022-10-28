function gramophone(band, album, song) {
let rotation = ((album.length * band.length) * song.length / 2 )/ 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')