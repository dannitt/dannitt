function areaOfFigures(input){
    const type = input[0];
let a = Number(input[1]);
result = ""
if (type === "square"){
    result = a * a;
} else if (type === "rectangle"){
    const b = Number(input[2]);
    result = a * b;
} else if (type === "circle"){
    result = a * a * Math.PI;
} else {
    const b = Number(input[2]);
    result = a * b / 2;
}
console.log(result.toFixed(3));
}
areaOfFigures(["rectangle", "7", "2.5"]);