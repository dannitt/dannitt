function centuriesToMinutes(cent) {
    let years = cent * 100;
    let allDays = Math.floor (years* 365.2422);
    let hours = (allDays) * 24;
    let minutes = hours * 60;
    console.log(`${cent} centuries = ${years} years = ${allDays} days = ${hours} hours = ${minutes} minutes`)
    }
centuriesToMinutes(1)