function knijarnitsa(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let litres = Number(input[2]);
    let discaunt = Number(input[3]);
    let prisePens = pens * 5.80;
    let priseMarkers = markers * 7.20;
    let priseLitres = litres * 1.20;
    let priseTotal = prisePens + priseMarkers + priseLitres;
    let priseWithoutDisc = priseTotal - priseTotal * discaunt/100;
    console.log(`${priseWithoutDisc}`);
    }
    knijarnitsa(["2", "3", "4", "25"])