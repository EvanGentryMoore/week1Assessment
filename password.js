const readline = require('readline');

const { workerData } = require("worker_threads");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// console.log(` `);
console.log(
`
########     ###     ######   ######  ##      ##  #######  ########  ########  
##     ##   ## ##   ##    ## ##    ## ##  ##  ## ##     ## ##     ## ##     ## 
##     ##  ##   ##  ##       ##       ##  ##  ## ##     ## ##     ## ##     ## 
########  ##     ##  ######   ######  ##  ##  ## ##     ## ########  ##     ## 
##        #########       ##       ## ##  ##  ## ##     ## ##   ##   ##     ## 
##        ##     ## ##    ## ##    ## ##  ##  ## ##     ## ##    ##  ##     ## 
##        ##     ##  ######   ######   ###  ###   #######  ##     ## ########  `,
 `\n`);

console.log(`Welcome to the password creator and validator!`, `\n`);
console.log(`Instructions:`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Password cannot be shorter than 10 characters`);
console.log(`Password can not be longer than 25 characters`);
console.log(`Password must contain at least one special character !@#$%^&*()_-+=[]{}\'",.<>/?`);
console.log(`Password must contain at least one numerical character`);
console.log(`Password must contain at least one Capital Letter`);
console.log(`Password cannot begin with a SPACE.`, `\n`);
    
let password;

reader.question(`Please create your password: `, function(userInput){
    
    password = userInput;

    let capitalLetter = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
    let capCheck = [];
    let specialChar = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `-`, `+`, `=`, `[`, `]`, `{`, `}`, `'`, `"`, `,`, `.`, `<`, `>`, `/`, `?`];
    let specCheck = [];
    let number = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`]
    let numCheck= [];
    let notTooShort = [];
    let notTooLong = [];
    let noSpaceStart = [];

    console.log(``);
    if(password.length < 10){
        console.log(`Password is too short.`);
    } else {
        notTooShort.push(true);
    }   

    if(password.length > 25){
        console.log(`Password is too long.`);
    } else {
            notTooLong.push(true);
    }

    if(password[0] === ` `){
        console.log(`Your password cannot start with a space.`);
    } else {
        noSpaceStart.push(true);
    }

    for(let i = 0; i < password.length; i++){
        if(capitalLetter.indexOf(password[i]) !== -1){
            capCheck.push(true);
        } else if(specialChar.indexOf(password[i]) !== -1){
             specCheck.push(true);
        } else if(number.indexOf(password[i]) !== -1){
            numCheck.push(true);
        }
    }

    if(capCheck[0] !== true){
        console.log(`You need at least one capital letter.`);
    }

    if(specCheck[0] !== true){
        console.log(`You need at least one special character`);
    }

    if(numCheck[0] !== true){
        console.log(`You need at least one number.`)
    }

    if(capCheck[0] === true && specCheck[0] === true && numCheck[0] === true && notTooShort[0] === true && notTooLong[0] === true && noSpaceStart[0] === true){
        console.log(`Password is good.`, `\n`);
        reader.question(`What was your password: `, function(answer){
            if(answer === password){
                console.log(`
                
 ██████╗ ██████╗ ███╗   ██╗ ██████╗ ██████╗  █████╗ ████████╗███████╗    
 ██╔════╝██╔═══██╗████╗  ██║██╔════╝ ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝    
 ██║     ██║   ██║██╔██╗ ██║██║  ███╗██████╔╝███████║   ██║   ███████╗    
 ██║     ██║   ██║██║╚██╗██║██║   ██║██╔══██╗██╔══██║   ██║   ╚════██║    
 ╚██████╗╚██████╔╝██║ ╚████║╚██████╔╝██║  ██║██║  ██║   ██║   ███████║    
  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    
                                                                          
 
                `)
            } else {
                console.log(`Too bad. You mistyped at some point. Start over.`)
            }
            reader.close();
        });
    } else {
        console.log(``);
        console.log(`Try again.`);
        reader.close();
    }
    // console.log(`capCheck`, capCheck);
    // console.log(`spaceCheck`, specCheck);
    // console.log(`numCheck`, numCheck);
    // console.log(`notTooShort`, notTooShort);
    // console.log(`notTooLong`, notTooLong);
    // console.log(`noSpaceStart`, noSpaceStart);
    
});
