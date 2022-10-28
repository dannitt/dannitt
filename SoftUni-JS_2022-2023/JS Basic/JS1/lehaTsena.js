function lehaTsena(input){
    let squareM = Number(input[0]);
    let priceSqm = Number(7.61);
    let discaunt = Number(18/100);
    let sume = squareM * priceSqm;
    let sumeDiscaunt = sume * discaunt;
    let sumeWithoutD = sume - sumeDiscaunt;
        console.log(`The final price is: ${sumeWithoutD} lv.`);
        console.log(`The discount is: ${sumeDiscaunt} lv.`);
    }
    lehaTsena([550])