function courierExpress(input) {
let kg = Number(input[0]);
let kindPackige = input[1];
let km = Number(input[2]);
let price = 0;
if(kg <= 1){
    switch(kindPackige){
        case "standard" : price = km * 0.03; break;
        case "express" : price =  km * kg * (0.03 * 80 /100) + km * 0.03 ; break;
    }
} else if(kg >1 && kg<=10){
    switch(kindPackige){
        case "standard" : price = km * 0.05; break;
        case "express" : price =  km * kg * (0.05 * 40 /100) + km * 0.05  ; break;
    }
} else if (kg >10 && kg <=40){
    switch(kindPackige){
        case "standard" : price = km * 0.10; break;
        case "express" : price = km * kg * (0.10 * 5 / 100) + km * 0.10  ; break;
}
} else if (kg > 40 && kg <=90){
    switch(kindPackige){
        case "standard" : price = km * 0.15; break;
        case "express" : price = km * kg * (0.15  * 2 /100) + km * 0.15  ; break;
}  
} else if (kg >90 && kg <=150){
    switch(kindPackige){
        case "standard" : price = km * 0.20; break;
        case "express" : price = km * kg * (0.20 * 1 /100) + km * 0.20 ; break;
} 
}
console.log(`The delivery of your shipment with weight of ${kg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
}
courierExpress(["20", 
"standard",
"349"])




