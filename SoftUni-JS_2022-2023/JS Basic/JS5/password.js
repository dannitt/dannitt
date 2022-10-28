function password(input) {
let index = 0;
let name = input[index];
index++ 
let pass = input[index];
index++
let tempPass = 0
while(tempPass !== pass){
    tempPass = input[index];
    index++
}
console.log(`Welcome ${name}!`)
}
password(["Gosho",
"secret",
"secret"])

