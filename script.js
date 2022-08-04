// Assignment Code
var generateBtn = document.querySelector("#generate");

//variable initilization
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","~","`","{","[","}","]","|",":",";","'","<",",",">",".","?","/",]

//random number generator
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Write password to the #password input
function writePassword() {
  var length = prompt("How many character do you want in your password? (8-128)");
  var lowercase = confirm("Do you want your password to include lowercase characters?");
  var uppercase = confirm("Do you want your password to include uppercase characters?");
  var numeric = confirm("Do you want your password to include numbers?");
  var special = confirm("Do you want your password to include special characters?");

  if (!lowercase && !uppercase && !numeric && !special) {
    alert("please pick at least one character type");
    writePassword();
  }

  function generatePassword() {
    var possibleCharacters = [];
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
