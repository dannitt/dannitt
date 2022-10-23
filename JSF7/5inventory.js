function inventory(arr) {
let myArr = []
for (let el of arr){
    let heroeData = el.split(" / ");
    let nameHero = heroeData[0];
    let power = Number(heroeData[1])
    let activity = heroeData[2]
    let currHero = {
        name:nameHero,
        level:power,
        items:activity
    }
    myArr.push(currHero)
}
let sortedByLevel = myArr.sort((a,b) =>{
    return a.level-b.level;
});
for (let hero of sortedByLevel){
console.log(`Hero: ${hero.name}`)
console.log(`level => ${hero.level}`)
console.log(`items => ${hero.items}`)
}
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])