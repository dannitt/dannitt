function login(input) {
    let index = 1
    let name = input[0];
    let passWard= ""
    let pass = input[index];
       index++;
    let counter =0;
    let isEqual = true;
for (let i=name.length-1; i>=0; i--){
    passWard = passWard + name[i];
}
while (pass !== passWard && pass !== undefined) {   
   pass = input[index]
        index++
        counter++
    if (counter <=3){
    console.log(`Incorrect password. Try again.`);
    } else {
        console.log(`User ${name} blocked!`)
        isEqual = true;
        break;
    }
    if (pass === undefined){
      isEqual = false;
      break;
      }
    }
if ( pass === passWard){
    console.log(`User ${name} logged in.`);
} 
}
login(['Acer','login','go','let me in','recA'])