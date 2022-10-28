function softUniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.0-9]*<(?<product>\w+)>[^$%|.0-9]*\|(?<count>\d+)\|([^$%|.0-9]*)(?<price>\d+(\.\d+)?)\$/g
    let totalSum = 0
    let text = input.join('-')
    let current = pattern.exec(text)
    while (current) {
        let currentPrice = Number(current.groups.count) * Number(current.groups.price);
        let currentName = current.groups.name;
        let currentProduct = current.groups.product;
        totalSum += currentPrice;
        console.log(`${currentName}: ${currentProduct} - ${currentPrice.toFixed(2)}`);
        current = pattern.exec(text);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)