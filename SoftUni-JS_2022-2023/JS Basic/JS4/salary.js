function salary(input) {
let index = 0;
let nTabs = Number(input[index]);
index++;
let money = Number(input[index]);
index++
let isHaveSalary = true;
for(let i=0; i< nTabs; i++){
    let curTab = input[index];
    index++;
    if(curTab === "Facebook"){
        money -= 150;
    } else if(curTab === "Instagram"){
        money -= 100;
    } else if(curTab === "Reddit"){
        money -= 50;
    }
if (money <= 0){
    console.log(`You have lost your salary.`);
    isHaveSalary = false;
    break;
}
}
if (isHaveSalary){
    console.log(money);
}
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
