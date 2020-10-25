// Assignment Code
var generateBtn = document.querySelector("#generate");

// DECLARE a list of 'numbers'
var numbers = [0,1,2,3,4,5,6,7,8,9];

// DECLARE a list of 'lowercaseLetters'
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// DECLARE a list of 'uppercaseLetters'
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// DECLARE a list of 'specialCharacters'
let symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword () {

    // PROMPT the user for a 'passwordLength' 
    const passwordLength = prompt("Provide a length");

    //IF NOT ( passwordlength >=8 || paswordLength <= 128 )
    if( !(passwordLength >=8 || passwordLength<= 128) ) {
        // THEN ALERT to the user that they need to provide correct length
        alert("That ain't it.");
        // AND Exit Funtion
        return;
    }
}

// DECLARE a new list of 'charactersToUse'
let charactersToUse = [] ; 

// CONFIRM if password generator 'isUsingNumbers'
let useNumbers = confirm('Include numbers in your password');
// IF 'isUsingNumbers'
if (useNumbers == true){
// THEN push 'numbers' into 'charactersToUse' list
charactersToUse =charactersToUse.concat(numbers);
}
// CONFRIM if password generator 'isUsingLowercaseLetters'
let useLower = confirm ('Include lowercase letters in your password');
// IF 'isUsingLowercaseLetters'
if (useLower == true) {
// THEN push 'lowercaseLetters' into 'charactersToUse' list
charactersToUse = charactersToUse.concat(lowercase);
}


// CONFIRM if the password generator 'isUsingUppercaseLetters'
let useUpper = confirm('Include uppercase letters in your password');
if (useUpper == true){
// THEN push 'uppercaseLetters' into 'charactersToUse' list
charactersToUse = charactersToUse.concat(uppercase);
}
// CONFIRM if the the password generator 'isUsingSpecialCharactersLetters'
let useSymbols = confrim('Include symbols in your password');
// IF 'isUsingSpecialCharactersLetters'
if (useSymbols == true){
// Then push 'specialCharacters' into 'charactersToUse' list
charactersToUse = charactersToUse.concat(symbols);
}

// NO NUMBER OR CHARACTER PICKED
if ( !usenumbers && !useLower && !useUpper && !useSymbols){
    alert('Need to pick number, lowercase, capitalized, or symbol to continue');
    return;
}
// DECLARE a new 'password' string
var password = "";

// FOR i = 0; CONTINUE as long as i < passswordLength; i++;
for( var i = 0; i < passwordLength; i++ ) {

}

// WHILE password.length < passwordLength
while ( password.length < passwordLength) {


}

// SELECT 'randomCharacter' a character from 'charactersToUs'
// APPEND 'randomCharacter' to 'password' string

// WRITE password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// ADD event listener to generate button 
generateBtn.addEventListener("click", writePassword);