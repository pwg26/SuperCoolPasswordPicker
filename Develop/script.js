// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", function(){document.querySelector(".wrapper").style.display="none"});







//range value for slider
generateBtn.addEventListener("click", function(){
  document.querySelector(".wrapper").style.display="none";
  document.querySelector(".pop-up").style.display="flex";
  document.querySelector("#third-prompt").style.display="flex";
})



// //activate pop up criteria windows



// //generate password code
// function generatePassword(){
//   var passwordLengthMax= 128
//   var passwordLengthMin= 8
//   var lowerCase="abcdefghijklmnopqrstuvwxyz"
//   var uppperCase = lowerCase.toUpperCase()
//   var specialCharacters = "" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ""

  





