const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
//15
let randPassword1 = document.getElementById("rand-password-1")
let randPassword2 = document.getElementById("rand-password-2")
let passwordLength = 15


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
    randPassword1.textContent = generateRandomPassword()
    randPassword2.textContent = generateRandomPassword()
}

