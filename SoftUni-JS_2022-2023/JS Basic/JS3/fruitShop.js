function fruitShop(input) {
    const fruit = input[0];
    const day = input[1];
    const quontity = Number(input[2]);
    let price = 0;
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
       switch (fruit){
        case "apple" : price = quontity * 1.20 ; console.log (price.toFixed(2)); break;
        case "orange" : price = quontity * 0.85; console.log (price.toFixed(2)); break;
        case "banana" : price = quontity * 2.50; console.log (price.toFixed(2)); break;
        case "grapefruit" : price = quontity * 1.45; console.log (price.toFixed(2)); break;
        case "kiwi" : price = quontity * 2.70; console.log (price.toFixed(2)); break;
        case "pineapple" : price = quontity * 5.50; console.log (price.toFixed(2)); break;
        case "grapes" : price = quontity * 3.85; console.log (price.toFixed(2)); break; 
        default : console.log("error") ; break;        
    } 
} else if (day === "Saturday" || day === "Sunday"){
        switch (fruit){
                case "apple" : price = quontity * 1.25; console.log (price.toFixed(2)); break;
                case "orange" : price = quontity * 0.90; console.log (price.toFixed(2)); break;
                case "banana" : price = quontity * 2.70; console.log (price.toFixed(2)); break;
                case "grapefruit" : price = quontity * 1.6; console.log (price.toFixed(2)); break;
                case "kiwi" : price = quontity * 3;  console.log (price.toFixed(2)); break;
                case "pineapple" : price = quontity * 5.60; console.log (price.toFixed(2)); break;
                case "grapes" : price = quontity * 4.20; console.log (price.toFixed(2)); break ;
               default : console.log("error") ; break;
                        }      
    } else {
        console.log("error");
    }
        
}
fruitShop(["apple", "Friday", "2.5"]);