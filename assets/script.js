// Assignment Code
var generateBtn = document.querySelector("#generate");

// DECLARE a list of 'numbers'
var numbers = [0,1,2,3,4,5,6,7,8,9];

// DECLARE a list of 'lowercaseLetters'

// DECLARE a list of 'uppercaseLetters'

// DECLARE a list of 'specialCharacters'


function generatePassword () {

    // PROMPT the user for a 'passwordLength' 
    const passwordLength = prompt("Provide a length");

    //IF NOT ( passwordlength >=8 || paswordLength <= 128 )
    if( !(passwordLength >=8 || passwordLength<= 128) ) {
        // THEN ALERT to the user that they need to provide correct length
        alert("Wrong");
        // AND Exit Funtion
        return;
    }
}

// DECLARE a new list of 'charactersToUse'

// CONFIRM if password generator 'isUsingNumbers'

// IF 'isUsingNumbers'
// THEN push 'numbers' into 'charactersToUse' list

// CONFRIM if password generator 'isUsingLowercaseLetters'

// IF 'isUsingLowercaseLetters'
// THEN push 'lowercaseLetters' into 'charactersToUse' list

// CONFIRM if the password generator 'isUsingUppercaseLetters'

// IF 'isUsingUppercaseLetters'
// THEN push 'uppercaseLetters' into 'charactersToUse' list

// CONFIRM if the the password generator 'isUsingSpecialCharactersLetters'

// IF 'isUsingSpecialCharactersLetters'
// Then push 'specialCharacters' into 'charactersToUse' list

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