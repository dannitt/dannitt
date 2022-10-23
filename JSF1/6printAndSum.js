function printAndSum(m, n) {
    let counter = 0
    let res = ""
    for (i = m; i <= n; i++) {
        res += `${i} `;
        counter += i
    }
    console.log(res);
    console.log(`Sum: ${counter}`)
}
printAndSum(50, 60)