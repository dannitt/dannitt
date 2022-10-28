function circleAreaPerimeter (input){
const r = Number (input[0]);
let perimeter = 2 * r * Math.PI;
let area = (r * r) * Math.PI;
console.log(area.toFixed(2));
console.log(perimeter.toFixed(2));
}
circleAreaPerimeter(["3"]);