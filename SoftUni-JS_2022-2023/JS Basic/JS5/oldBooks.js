function oldBooks(input) {
let index = 0;
let searchedBook = input[index];
index++;
let tempBook = input[index];
index++;
let counter = 0;
let findBook = false
while (tempBook !== "No More Books"){
      if (tempBook !== searchedBook){
        counter++
        tempBook = input[index];
        index++; 
    } else if (tempBook === searchedBook){
        findBook = true;
        console.log(`You checked ${counter} books and found it.`);
        break;
    }   
}
if(!findBook){
console.log(`The book you search is not here!`);
console.log(`You checked ${counter} books.`)
}
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


