const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
//15
let randPassword1 = document.getElementById("rand-password-1")
let randPassword2 = document.getElementById("rand-password-2")
let passwordLength = 15
let symbol = ""


// function randomPasswordOne() {
//     for(let n = 1; n < 16; n++){
//         for(let i = 0; i < characters.length; i++){
//             symbol = characters[randomNumber]  
//         }
//         passwordArray1.push(symbol)

//     }
//    return passwordArray1

// }
// console.log(randomPasswordOne())
function randomSymbol(){
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber]
}

function generateRandomPassword(){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
    randomPassword += randomSymbol()
    }
    return randomPassword
}

function showPasswords(){
    randPassword1.textContent += generateRandomPassword()
    randPassword2.textContent += generateRandomPassword()
}

// let test = document.getElementById("test")
// test.textContent += generateRandomPassword()

// randPassword1.textContent = password1
// randPassword1.textContent = generateRandomPassword()


// const generatePasswordOne = generateRandomPassword()
// console.log(generatePasswordOne)


// function fullPassword(){
//     for(let n = 1; n < 16; n++){
//         // passwordArray1.push(randomSymbol())
//         randPassword1.textContent += passwordArray1[randomSymbol()]
//     }

// }

