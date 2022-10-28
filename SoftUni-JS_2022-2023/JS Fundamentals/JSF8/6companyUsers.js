function companyUsers(data) {
        let listOfCompanies = {};
        for (let line of data) {
            let [company, number] = line.split(" -> ");
            if (!listOfCompanies.hasOwnProperty (company)) {
                listOfCompanies[company] = [];
            }
            if (!listOfCompanies[company].includes(number)) {
                listOfCompanies[company].push(number);
            }
        }
        let sortedCompanies = Object.keys(listOfCompanies);
        sortedCompanies.sort();
        for (let company of sortedCompanies) {
            console.log(company);
            for (let emp of listOfCompanies[company]) {
                console.log(`-- ${emp}`);
            }
        }
    }
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])