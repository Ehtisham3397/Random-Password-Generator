let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let charactersSet2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let isPasswordGenerated = false
let toggleState = false
var passwordOne = document.getElementById("password-one")
var passwordTwo = document.getElementById("password-two")
let passwordCopied = document.getElementById("copy")


function generatePassword(){
    let passwordLength = document.getElementById("password-length").value 
    let length = parseInt(passwordLength)
    if (isPasswordGenerated === false){
        for (i = 0; i < length ; i++){
            let password1 = Math.floor(Math.random() * characters.length)
            let password2 = Math.floor(Math.random() * characters.length)
            passwordOne.textContent += characters[password1]
            passwordTwo.textContent += characters[password2]
        }
    }
    isPasswordGenerated = true
}

function withSymbolNumber(){
    let passwordLength = document.getElementById("password-length").value 
    let length = parseInt(passwordLength)
    if (isPasswordGenerated === true){
        passwordOne.textContent = ""
        passwordTwo.textContent = ""
        for (i = 0; i < length ; i++){
            let password1 = Math.floor(Math.random() * characters.length)
            let password2 = Math.floor(Math.random() * characters.length)
            passwordOne.textContent += characters[password1]
            passwordTwo.textContent += characters[password2]
        }
    }
}

function withoutSymbolNumber(){
    let passwordLength = document.getElementById("password-length").value 
    let length = parseInt(passwordLength)
    if (isPasswordGenerated === true){
        passwordOne.textContent = ""
        passwordTwo.textContent = ""
        for (i = 0; i < length ; i++){
            let password1Toggled = Math.floor(Math.random() * charactersSet2.length)
            let password2Toggled = Math.floor(Math.random() * charactersSet2.length)
            passwordOne.textContent += charactersSet2[password1Toggled]
            passwordTwo.textContent += charactersSet2[password2Toggled]
        }
    }
}

function toggleFunc(){
    if (toggleState === false){
        withoutSymbolNumber()
    } else {
        withSymbolNumber()
    }
    toggleState = !toggleState;
}

passwordOne.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordOne.textContent);
    passwordCopied.textContent = "password 1 copied"
})

passwordTwo.addEventListener("click", function(){
    navigator.clipboard.writeText(passwordTwo.textContent);
    passwordCopied.textContent = "password 2 copied"
})

