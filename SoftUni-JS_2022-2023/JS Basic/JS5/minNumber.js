function minNumber(input) {
    let index = 0;
    let comm = input[index];
    index++
    let minNumb = Number.MAX_SAFE_INTEGER;
    while(comm !== "Stop"){
        let num = Number(comm);
        if(num < minNumb){
            minNumb = num;
        }
    comm = input[index];
    index++
    }
    console.log(minNumb)
    }
    minNumber(["-10",
    "20",
    "-30",
    "Stop"])
    