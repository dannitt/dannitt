function smallShop(input) {
    const product = input[0];
    const town = input[1];
    const quontity = Number(input[2]);
    let price = 0;
    switch (town) {
        case "Sofia" :
            switch(product) {
        case "coffee" : price = quontity * 0.5; break;
        case "water" : price = quontity * 0.8; break;
        case "beer" : price = quontity * 1.20; break;
        case "sweets" : price = quontity * 1.45; break;
        case "peanuts" : price = quontity * 1.60; break;
    }
    break;
        case "Plovdiv" :
        switch(product) {
            case "coffee" : price = quontity * 0.40; break;
            case "water" : price = quontity * 0.7; break;
            case "beer" : price = quontity * 1.15; break;
            case "sweets" : price = quontity * 1.30; break;
            case "peanuts" : price = quontity * 1.50; break;
        }
        break;
        case "Varna" :
        switch(product) {
            case "coffee" : price = quontity * 0.45; break;
            case "water" : price = quontity * 0.7; break;
            case "beer" : price = quontity * 1.1; break;
            case "sweets" : price = quontity * 1.35; break;
            case "peanuts" : price = quontity * 1.55; break;
        }
        break;
}
console.log(price);
}
smallShop(["peanuts", "Plovdiv", "1"]);