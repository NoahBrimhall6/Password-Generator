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

function getRandom(array) {
  return array[random(0, array.length - 1)];
}

// Write password to the #password input
function writePassword() {
  var length = prompt("How many character do you want in your password? (8-128)");
  length = Math.floor(length);

  if (length < 8 || length > 128 || length*0 !== 0) {
    alert("Please enter a number between 8 and 128");
    writePassword();
  } else {
    var lowercase = confirm("Do you want your password to include lowercase characters?");
    var uppercase = confirm("Do you want your password to include uppercase characters?");
    var numeric = confirm("Do you want your password to include numbers?");
    var special = confirm("Do you want your password to include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
      alert("please pick at least one character type");
      writePassword();
    } else {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }

  function generatePassword() {
    var possibleCharacters = [];

    if (lowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (uppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (numeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if (special) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

    var newPassword = [];
    
    for (i = 0; i < length; i++) {
      newPassword.push(getRandom(possibleCharacters)); 
    }
    
    return newPassword.join("");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//debugging

