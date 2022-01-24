const readline = require('readline');

const { workerData } = require("worker_threads");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
    ///////////////////////////////////////////////////////////////////////////
    //These 3 If statements check if the password is too short, too long, or if it starts with a space, respectivly. When conditions of the password aren't met, the IF statements leave a note for the User.
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
    ////////////////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////////////////
    //The For Loop checks each inidvidual character in the User's password and checks the characters against an array. If the character is in the array, then that condition is valid.
    for(let i = 0; i < password.length; i++){
        if(capitalLetter.indexOf(password[i]) !== -1){
            capCheck.push(true);
        }
        if(specialChar.indexOf(password[i]) !== -1){
             specCheck.push(true);
        }
        if(number.indexOf(password[i]) !== -1){
            numCheck.push(true);
        }
    }
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////
    //These If statements check if the conditions in the above For Loop have been met. If the condition hasn't been met, they will leave a message for the User.
    if(capCheck[0] !== true){
        console.log(`You need at least one capital letter.`);
    }

    if(specCheck[0] !== true){
        console.log(`You need at least one special character`);
    }

    if(numCheck[0] !== true){
        console.log(`You need at least one number.`)
    }
    ////////////////////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////////////////////
    //This IF statement checks to see if all the conditions for the password have been met. When all have been met, the User has to type in their password again. If the 2nd input matches the first, Congrats. If it doesn't match, the Useer has to start over.
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
    //////////////////////////////////////////////////////////////////
    //These can be used to help see when what conditions were met in the code. They are not needed for the final product, but are useful for troubleshooting.

    // console.log(`capCheck`, capCheck);
    // console.log(`spaceCheck`, specCheck);
    // console.log(`numCheck`, numCheck);
    // console.log(`notTooShort`, notTooShort);
    // console.log(`notTooLong`, notTooLong);
    // console.log(`noSpaceStart`, noSpaceStart);
    
});
