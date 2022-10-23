function storeProvision(stock, delivery) {
    let myObj = {}
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i]
        myObj[product] = Number(stock[i + 1])
    }
    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i]

        if (!myObj.hasOwnProperty(product)) {
            myObj[product] = 0
        }
        myObj[product] += Number(delivery[i + 1])
    }
    for (const product in myObj) {
        console.log(`${product} -> ${myObj[product]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])