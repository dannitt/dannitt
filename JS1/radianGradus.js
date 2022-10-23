function radianGradus(input){
    let radians = Number(input[0]);
    let gradus = radians * 180/Math.PI;
    console.log(`${gradus}`);
    }
    radianGradus([3.1416])