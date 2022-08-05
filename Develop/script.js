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

window.onload = alert('Welcome!');


//function to call 
function generatePassword() {
  var characters = [];
  var password = '';


var length = prompt('Please enter the amount of characters you would like your password to be.');

if (length < 8 || length > 128) {
  alert('Please enter a value between 8 and 128 characters long!');
}  else {

  if(confirm ('Do you want your password to contain any upper case letters?')) {
    Array.prototype.push.apply(characters, upperCaseChar);
  }

  if(confirm ('Do you want your password to contain any lower case letters?')) {
    Array.prototype.push.apply(characters, lowerCaseChar);
  }

  if(confirm('Do you want your password to contain any numeric values?')) {
    Array.prototype.push.apply(characters, numbersChar);
  }

  if(confirm('Do you want your password to contain symbols?')) {
    Array.prototype.push.apply(characters, symbolsChar);
  }

  if (characters.length === 0) {
    alert('Please choose at least 1 type of character to generate a password');
  }

  //Creates a for loop to create and generate a password
  else {
    for (var i=0; i < length; i++) {
      var randomize = Math.floor(Math.random()*characters.length);
      password += characters[randomize];
    }
  }
}

document.getElementById('password').innerHTML = password;

}
