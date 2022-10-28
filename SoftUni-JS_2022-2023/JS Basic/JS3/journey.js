function journey(input) {
    const budjet = Number(input[0]);
    const season = input[1];
let place = "";
let country = "";
let price = 0;
if (budjet <= 100){
    country = "Bulgaria";
        if (season === "summer") {
            price = budjet * 30 / 100;
        } else {
            price = budjet * 70 / 100;
        }
    } else if (budjet <= 1000 && budjet > 10) {
        country = "Balkans"
        if (season === "summer") {
            price = budjet * 40 / 100;
        } else {
            price = budjet * 80 / 100;
        }
    } else if (budjet > 1000){
        country = "Europe"
        price = budjet * 90 / 100;
    }
    if (season === "summer" && country != "Europe") {
        place = "Camp";
        } else {
            place = "Hotel";
        }
    razhod = price.toFixed(2)
console.log(`Somewhere in ${country}`);
console.log(`${place} - ${razhod}`);
}
journey(["1500", "summer"]);