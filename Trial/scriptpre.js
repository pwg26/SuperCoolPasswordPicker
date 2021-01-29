// ***** in this js version, form 1 is skipped

// Assignment Code
// starter page w/ button 
var generateBtn = document.querySelector("#generate");

// // form1
//   // form1-button
// let form1Btn = document.querySelector("#form1-btn");

//   // form1-checkboxes
// let form1boxlen = document.querySelector("#chooselen");
// let form1boxchar = document.querySelector("#choosechar");

// form2
    // form2-buttons 
const form2Btn = document.querySelector("#form2-btn");

    // fotm2-range bar and value with function to link both
const rangeBar = document.querySelector('#rangebar')
const rangeAmount = document.querySelector('#rangeamount')
    
rangeBar.addEventListener('input', syncBartoAmount)
rangeAmount.addEventListener('input', syncBartoAmount)

function syncBartoAmount(x) {
    const value = x.target.value
    rangeBar.value = value
    rangeAmount.value = value
    }

// form3
    // form-3 buttons
var form3Btn = document.querySelector("#form3-btn");
    
    // form-3 check boxes
const upperCase = document.querySelector('#UL')
const lowerCase = document.querySelector('#LL')
const numbers = document.querySelector('#num')
const special = document.querySelector('#special')



// function to quickly loop and build arrays from char codes for given character types


const upperCaseChar = String.fromCharCode(makeArray(65, 90))
const lowerCaseChar = String.fromCharCode(makeArray(97, 122))
const numberChar = String.fromCharCode(makeArray(48, 57))
const specialChar = String.fromCharCode(makeArray(32, 47).concate(makeArray(58, 64)).concate(makeArray(91, 96)).concate(makeArray(123, 126)))

function makeArray(H, L){
  var array= []
  for (var i = L; 0 =< H; i){
      array.push(i)
  }
}

// form-2 & form-3 imputs depending if they are slected

const Characteramount = rangeAmount.value

const upperCaseChecked = upperCase.checked
const lowerCaseChecked = lowerCase.checked
const numbersChecked = numbers.checked
const specialChecked = special.checked










// generate password function
function generatePassword(upperCaseChecked, lowerCaseChecked, numbersChecked, specialChecked){

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


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
    document.querySelector("#starter-page").style.display="block"; 
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
