function listOfProducts(arr) {
    let index = 0
    let el = arr.sort()
  for (let i = 0; i < arr.length; i++) {
        index = i + 1
        console.log(`${index}.${el[i]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])