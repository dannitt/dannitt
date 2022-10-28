function cinema(input) {
    const film = input[0];
    const row = Number(input[1]);
    const colomn = Number(input[2]);
let price = 0;
switch (film) {
    case "Premiere" : console.log((price = row * colomn * 12).toFixed(2)); break;
    case "Normal" : console.log((price = row * colomn * 7.50).toFixed(2)); break;
    case "Discount" : console.log((price = row * colomn * 5).toFixed(2)); break;
}
}
cinema(["Premiere", "10", "12"]);