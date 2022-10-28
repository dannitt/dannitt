function makeDictionary(data) {
    let myArr = []
    let myObj = {}
    for (let i=0; i<data.length; i++){
        
        myArr.push(JSON.parse(data[i]));
        }
    for (let el of myArr){
        let currKey = Object.keys(el).join("");
        myObj[currKey]= Object.values(el).join("");
    }
    let currentArrOfObj = Object.entries(myObj).sort();
    for (let j of currentArrOfObj){
        let currKey = j[0];
        let currValue = j[1];
        console.log(`Term: ${currKey} => Definition: ${currValue}`)
    }    
}
makeDictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}'])