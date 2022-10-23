function summerOutfit(input) {
const degrees = input[0];
const time = input[1];
let outfit ;
let shoes ;
if (degrees <= 18 && degrees >= 0) {
   if (time === "Morning"){
    outfit = "Sweatshirt";
    shoes = "Sneakers"; 
        } else if (time === "Afternoon" || time === "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
} if (degrees <= 24 && degrees > 18) {
    if (time === "Afternoon"){
        outfit = "T-Shirt";
        shoes = "Sandals"; 
            } else if (time === "Morning" || time === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins"; 
            }
} if (degrees >= 25) {
    if (time === "Morning"){
        outfit = "T-Shirt";
        shoes = "Sandals"; 
    } else if (time === "Afternoon"){
        outfit = "Swim Suit";
        shoes = "Barefoot"; 
    } else if (time === "Evening"){
        outfit = "Shirt";
        shoes = "Moccasins"; 
        }
}
console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16", "Morning"]);