function archProdj(input){
    let name = input[0];
    let project= input[1];
    let time= Number(3);
    let spareTime= project*time;   
    console.log(`The architect ${name} will need ${spareTime} hours to complete ${project} project/s.`);
}
    archProdj(["Yordanka", "3"])