// Assignment Code, added variables for character types //
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!()?[]`~;:!@#$%^&*+=";

// generatePassword function start //

funtion generatePassword() {
  // set var password to be an empty array //
  var password = []  
  // set var promptLength to window prompt //
  var promptLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128");
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
