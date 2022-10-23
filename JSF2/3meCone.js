function cone(radius, height) {
let v = (1/3 * Math.PI * radius*radius * height).toFixed(4)
let b = Math.PI * radius * radius
let s = Math.PI * radius * Math.sqrt(radius * radius + height* height)
let s1 = (s + b).toFixed(4)
console.log(`volume = ${v}`)
console.log(`area = ${s1}`)  
}
cone(3,
    5)