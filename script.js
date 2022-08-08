// Assignment Code
var generateBtn = document.querySelector("#generate");

var userPassword = {
    charCount: 8,
    lower: "",
    upper: "",
    number: "",
    special: ""
}

// Write password to the #password input
function writePassword() {

    var genLength = prompt("Choose a password length between 8 and 128 characters", 8);
    var genLow = prompt("Generate your password using lowercase (Y/N)", "Y");
    var genUp = prompt("Generate your password using uppercase (Y/N)", "Y");
    var genNum = prompt("Generate your password using numbers (Y/N)", "Y");
    var genSpe = prompt("Generate your password using special characters (Y/N)", "Y");

    userPassword.charCount = genLength;
    userPassword.lower = genLow.charAt(0);
    userPassword.upper = genUp.charAt(0);
    userPassword.number = genNum.charAt(0);
    userPassword.special = genSpe.charAt(0);

    var password = generatePassword();
    console.log("password: " + password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "_", "`", "{", "|", "}", "~"];

    var selectCharacters = [];
    if (userPassword.lower === "Y" || userPassword.lower === "y") {
        selectCharacters = selectCharacters.concat(lower);
    } 
    if (userPassword.upper === "Y" || userPassword.upper === "y") {
        selectCharacters = selectCharacters.concat(upper);
    } 
    if (userPassword.number === "Y" || userPassword.number === "y") {
        selectCharacters = selectCharacters.concat(number);
    } 
    if (userPassword.special === "Y" || userPassword.special === "y") {
        selectCharacters = selectCharacters.concat(special);
    } 
    console.log(selectCharacters);
    
    var newPassword = "";
    for (var i = 0; i < userPassword.charCount; i++) {
        newPassword = newPassword + selectCharacters[Math.trunc(Math.random() * selectCharacters.length)];
    }

    return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
