function aMinerTask(data) {
        let map = new Map();
        for (let i = 0; i < data.length; i++) {
            let mat = data[i]; i++;
            let amount = Number(data[i]);
            if (!map.has(mat)) {
                map.set(mat, amount);
            } else {
                let newAmount = map.get(mat) + amount;
                map.set(mat, newAmount);
            }
        }
        let entries = Array
            .from(map.entries())
            .forEach(([mat, num]) => console.log(`${mat} -> ${num}`));
    }
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    ])