// ***** in this js version, form 1 is skipped

// Assignment Code
// starter page w/ button 
const generateBtn = document.querySelector("#generate");

// form2
// form2-buttons 
const form2Btn = document.querySelector("#form2-btn");

// fotm2-range bar and value with function to link both
const rangeBar = document.querySelector('#rangebar')
const rangeAmount = document.querySelector('#rangeamount')

rangeBar.addEventListener('input', syncBartoAmount)
rangeAmount.addEventListener('input', syncBartoAmount)


// form3
// form-3 buttons
const form3Btn = document.querySelector("#form3-btn");

// form-3 check boxes
const upperCase = document.querySelector('#UL')
const lowerCase = document.querySelector('#LL')
const numbers = document.querySelector('#num')
const special = document.querySelector('#special')


// encompasses all criteria for all forms
const criteria = document.querySelector('#criteria')

// vairiable for password
const passwordText = document.querySelector("#password");


// arrays of special symbols

const UPPERCASE_CHAR_CODES = makeCharArray(65, 90)
const LOWERCASE_CHAR_CODES = makeCharArray(97, 122)
const NUMBER_CHAR_CODES = makeCharArray(48, 57)
const SYMBOL_CHAR_CODES = makeCharArray(33, 47).concat(
  makeCharArray(58, 64)
).concat(
  makeCharArray(91, 96)
).concat(
  makeCharArray(123, 126)
)



//  values of length and character depededing on what the user chooses
criteria.addEventListener('submit', e => {
  e.preventDefault()

  const characterAmount = rangeAmount.value
  const upperCaseChecked = upperCase.checked
  const lowerCaseChecked = lowerCase.checked
  const numbersChecked = numbers.checked
  const specialChecked = special.checked
  
  // // document.querySelector("#form3").style.display = "none";
  // // document.querySelector(".wrapper").style.display = "block";
  
  const finalpassword = generatePassword(characterAmount, upperCaseChecked, lowerCaseChecked, numbersChecked, specialChecked)
  passwordText.innerHTML = finalpassword
})



// generate password function
function generatePassword(characterAmount, upperCaseChecked, lowerCaseChecked, numbersChecked, specialChecked) {
  let availableChars = []

  
  
  if (upperCaseChecked) availableChars = availableChars.concat(UPPERCASE_CHAR_CODES)
  if (lowerCaseChecked) availableChars = availableChars.concat(LOWERCASE_CHAR_CODES)
  if (numbersChecked) availableChars = availableChars.concat(NUMBER_CHAR_CODES)
  if (specialChecked) availableChars = availableChars.concat(SYMBOL_CHAR_CODES )

  const passwordChars = []
  for (let i = 0; i < rangeAmount; i++) {
    const singlePasswordChar = characterAmount[Math.floor(Math.random() * availableChars.length)]
    passwordChars.push(String.fromCharCode(singlePasswordChar))
  }
  return passwordChars.join('')
}


// functions to generate different symbols based of char codes
function makeCharArra3y(low, high) {
  const array = []
  for (let i = low; i =< high; i++) {
    array.push(i)
  }
  return array
}


// syncs rangebar to value
function syncBartoAmount(e) {
  const value = e.target.value
  rangeBar.value = value
  rangeAmount.value = value
}









// pop-up windows
generateBtn.addEventListener("click", function () {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".pop-up").style.display = "flex3";
  document.querySelector("#form2").style.display = "flex";
})

form2Btn.addEventListener("click", function () {
  document.querySelector("#form2").style.display = "none";
  document.querySelector("#form3").style.display = "flex";
 })

form3Btn.addEventListener("click", function(){
  document.querySelector("#form3").style.display="none";
  document.querySelector(".wrapper").style.display="block"; 
  })










