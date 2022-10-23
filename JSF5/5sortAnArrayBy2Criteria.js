function sortAnArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    for (let el of sortedArr) {
        console.log(el)
    }
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])