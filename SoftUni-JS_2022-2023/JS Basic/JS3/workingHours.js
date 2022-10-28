function workingHours(input) {
    const hour = Number(input[0]);
    const day = input[1];
if (hour <= 18 && hour >= 10 && day != "Sunday") {
    console.log("open");
} else {
    console.log("closed");
}
}
workingHours(["22", "Sunday"]);