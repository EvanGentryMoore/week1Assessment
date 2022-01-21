const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(`What's your password? `, function(input){
    let password = `Devmountain`;
    let userType = input;
        
    if(userType.length > password.length && userType != password){
    // console.log(``);
    console.log(`That's too long.`);
    } 
    if(userType.length === password.length && userType != password){
    // console.log(``);
    console.log(`That's the right size.`);
    } 
    if(userType.length < password.length && userType != password){
        // console.log(` `);
        console.log(`Too short`)
    }
    if(userType = password){
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`Good job!`);
    }
    
    reader.close();
});

