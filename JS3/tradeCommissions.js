function tradeCommissions(input) {
    const town = input[0];
    const sale = Number(input[1]);
    let comm = 0;
if (sale <= 500 && sale >= 0) {
        switch (town) {
            case "Sofia" : console.log((comm = sale * 5 / 100).toFixed(2)); break;
            case "Varna" : console.log((comm = sale * 4.50 / 100).toFixed(2)); break;
            case "Plovdiv" : console.log((comm = sale * 5.5 / 100).toFixed(2)); break;
          default : console.log("error");break; 
            }
} else if (sale <= 1000 && sale > 500) {
        switch (town) {
            case "Sofia" : console.log((comm = sale * 7 / 100).toFixed(2)); break;
            case "Varna" : console.log((comm = sale * 7.5 / 100).toFixed(2)); break;
            case "Plovdiv" : console.log((comm = sale * 8 / 100).toFixed(2)); break;
           default : console.log("error"); break;
        }
} else if (sale <= 10000 && sale > 1000) {
        switch (town) {
            case "Sofia" : console.log((comm = sale * 8 / 100).toFixed(2)); break;
            case "Varna" : console.log((comm = sale * 10 / 100).toFixed(2)); break;
            case "Plovdiv" : console.log((comm = sale * 12 / 100).toFixed(2)); break;
           default : console.log("error"); break;
        }
} else if (sale > 10000) {
        switch (town) {
            case "Sofia" : console.log((comm = sale * 12 / 100).toFixed(2)); break;
            case "Varna" : console.log((comm = sale * 13 / 100).toFixed(2)); break;
            case "Plovdiv" : console.log((comm = sale * 14.5 / 100).toFixed(2)); break;
        default : console.log("error"); break;
     } 
} else {
    console.log("error");
}
}
tradeCommissions(["Plovdiv", "10"]);