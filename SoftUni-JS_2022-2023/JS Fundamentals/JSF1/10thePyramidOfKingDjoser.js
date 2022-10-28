function thePyramidOfKingDjoser(m,n) {
    let counter = 0
    let counterStone = 0
    let counterMarble = 0
    let counterLazuli = 0
    let stone = 0
    let marble = 0
    let lazuli = 0
    let gold = 0
while (m*m>4){
    counter ++;
    if (counter%5===0){
        lazuli = 2*m*n + 2*(m-2)*n;
        counterLazuli += lazuli;
        stone = (m-2)*(m-2)*n;
        counterStone += stone;
        m = m-2;
    }else{
    marble = 2*m*n + 2*(m-2)*n;
    counterMarble += marble;
    stone = (m-2)*(m-2)*n;
    counterStone += stone;
    m = m-2;
} 
}
gold = m * m * n;
counter ++
counter = counter*n

console.log(`Stone required: ${Math.ceil(counterStone)}`)
console.log(`Marble required: ${Math.ceil(counterMarble)}`)
console.log(`Lapis Lazuli required: ${Math.ceil(counterLazuli)}`)
console.log(`Gold required: ${Math.ceil(gold)}`)
console.log(`Final pyramid height: ${Math.floor(counter)}`)
}
thePyramidOfKingDjoser(11, 0.75)