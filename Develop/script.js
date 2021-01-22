// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//range value for slider
function updateTextInput(val) {
  document.getElementById('charlengthtext').value=val; 
}





//generate password code
function generatePassword(){
  var passwordLengthMax= 128
  var passwordLengthMin= 8
  var lowerCase="abcdefghijklmnopqrstuvwxyz"
  var uppperCase = lowerCase.toUpperCase()
  var specialCharacters = "" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ""

  




}
