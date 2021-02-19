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
  // create if statement for situation where no characters are entered into promptLength prompt //
  if (!promptLength) {
      return ("");
  }
  // create if statement for situation where characters entered into promptLength are less than 8 or greater than 128 //
  if (promptLength < 8 || promptLength > 128) {
      alert("Please choose a password length between 8 and 128 characters.");
      // create tryAgain option if promptlength selection is too large or small //
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");
      }
    }
  //create if statement for situation where characters entered in promptLength are not numerical //
  if (isNaN(parseInt(promptLength))) {
      alert("Please only enter a numerical value.")
  }  
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
