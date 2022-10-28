function cake(input){
    let index = 0;
    let left = Number(input[index]);
    index++
    let right = Number(input[index]);
    index++
    let cakePieces = left * right;
    let numbPieses = input[index];
    index++
    let counter = 0
    let restPieses = 0
    let numbPiesesTaken = 0
    while (numbPieses !== "STOP"){
        numbPiesesTaken = Number(numbPieses)
        counter += numbPiesesTaken
        if (cakePieces - counter <= 0){
            break
        }
    
      numbPieses = input[index];
      index++ 
      if (numbPieses === undefined){
          break
      }
}

    if (numbPieses === "STOP"){
    restPieses = cakePieces - counter
    console.log(`${restPieses} pieces are left.`)
    } else if (cakePieces - counter <= 0) {
    restPieses = Math.abs(cakePieces - counter)
    console.log(`No more cake left! You need ${restPieses} pieces more.`)
    } else {
        restPieses = Math.abs(cakePieces - counter)
        console.log(`${restPieses} pieces are left.`)
    }
    }
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

