// Assignment Code, added variables for character types //
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!()?[]`~;:!@#$%^&*+=";

// generatePassword function start //

function generatePassword() {
  // set var password to be an empty array //
  var password = [];  
  // set var promptLength to window prompt //
  var promptLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128");
    // create if statement for situation where no characters are entered into promptLength prompt //
    if (!promptLength) {
        return ("");
    };
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
    };
    // create if statement for situation where characters entered in promptLength are not numerical //
    if (isNaN(parseInt(promptLength))) {
      alert("Please only enter a numerical value.");
      // create tryAgain option if promptLength selection is not a numerical value //
      var tryAgain = confirm("Would you like to try again?");
      if (tryAgain) {
        generatePassword();
      } else {
        return ("");  
      }   
    };  
  
  console.log(promptLength)

  // create variables that are confirms for each type of character type criteria //
  var choiceLowercase = window.confirm("Would you like to include lowercase letters?");
  console.log(choiceLowercase)
  var choiceUppercase = window.confirm("Would you like to include uppercase letters?"); 
  console.log(choiceUppercase)
  var choiceNumber = window.confirm("Would you like to include numbers?");
  console.log(choiceNumber)
  var choiceSpecial = window.confirm("Would you like to include special characters?");
  console.log(choiceSpecial)  

  // create var promptChoices, create if statements that define promptChoices to character var based on responses to confirm var //
  // changed = to += , better semantics //
  var promptChoices = "";
 
    if (choiceLowercase) {
        promptChoices = lowercase;
    };
    if (choiceUppercase) {
        promptChoices += uppercase
    };
    if (choiceNumber) {
        promptChoices += numbers
    };
    if (choiceSpecial) {
        promptChoices += specialCharacters
    };

    // create loop that selects promptLength number of random promptChoice defined character types //
    for (var i=0; i < promptLength; i++) {
        password += promptChoices[Math.floor(Math.random() * promptChoices.length)];
    };

  // return generated password //
  return password;

};

function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };
  
generateBtn.addEventListener("click", writePassword)
