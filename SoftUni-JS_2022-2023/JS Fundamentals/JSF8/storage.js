function storage(data) {
let myMap = new Map();
for (let line of data){
    let [product, quantity] = line.split(" ");
    if (myMap.has(product)){
        let oldQuantity = myMap.get(product);
        myMap.set(product, oldQuantity + Number(quantity))
    } else {
        myMap.set(product, Number(quantity))
    }
} 
for ( let [k,v] of myMap.entries()){
    console.log(k, "->",v)
}
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)