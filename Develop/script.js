//Variables

// Variables for upper and lower case letters
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~';

//Variables to grab what is in between the ''
var upperCaseChar = upperCase.split('');
var lowerCaseChar = lowerCase.split('');
var numbersChar = numbers.split('');
var symbolsChar = symbols.split('');


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
