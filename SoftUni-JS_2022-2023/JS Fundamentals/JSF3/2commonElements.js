function commonElements(arr1, arr2) {
    let res = 0
    let point1 = 0
    let point2 = 0
    let areEqual = true
    for (let i = 0; i < arr1.length; i++) {
        point1 = arr1[i]
        for (let i = 0; i < arr1.length; i++) {
            point2 = arr2[i]
            if (point1 === point2) {
                console.log(arr2[i])
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])
