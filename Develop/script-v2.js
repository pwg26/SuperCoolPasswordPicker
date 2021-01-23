// ***** in this js version, form 1 is skipped

// Assignment Code
// starter page w/ button 
var generateBtn = document.querySelector("#generate");

// form1
  // form1-button
let form1Btn = document.querySelector("#form1-btn");

  // form1-checkboxes
let form1boxlen = document.querySelector("#chooselen");
var form1boxchar = document.querySelector("#choosechar");

// form2
var form2Btn = document.querySelector("#form2-btn");



// form3
var form3Btn = document.querySelector("#form3-btn");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button




generateBtn.addEventListener("click", function(){
  // opens form2 pop-up, hides starter page
  document.querySelector(".wrapper").style.display="none";
  document.querySelector(".pop-up").style.display="flex";
  document.querySelector("#form2").style.display="flex";

  // opens form3 depending what is selected on form2
        // if (form1boxlen.checked == false){
        //   form1Btn.style.display="bock";
        // } 
  
  form2Btn.addEventListener("click", function(){
    document.querySelector("#form2").style.display="none";
    document.querySelector("#form3").style.display="flex";
  })

  // opens original starter page with password depending what is selected on form 3

    form3Btn.addEventListener("click", function(){
      document.querySelector("#form3").style.display="none";
      document.querySelector(".wrapper").style.display="block"; 
    })

})


// //activate pop up criteria windows


// //generate password code
// function generatePassword(){
//   var passwordLengthMax= 128
//   var passwordLengthMin= 8
//   var lowerCase="abcdefghijklmnopqrstuvwxyz"
//   var uppperCase = lowerCase.toUpperCase()
//   var specialCharacters = "" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ""