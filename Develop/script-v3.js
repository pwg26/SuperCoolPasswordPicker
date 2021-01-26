// seperate pages
const startPage = document.querySelector("#start-page");
const rangebarPage = document.querySelector("#rangebar-page");
const CheckboxPage = document.querySelector("#check-box-page");

// buttons
const startBtn = document.querySelector("#start-btn");
const continueBtn = document.querySelector("#continue-btn");
const submitBtn = document.querySelector("#submit-btn");

// rangebar vairiables
var rangeBar = document.querySelector("#range-bar");
var rangeAmount = document.querySelector("#range-amount");

rangeBar.addEventListener("input", syncBar);
rangeAmount.addEventListener("input", syncBar);

// checkbox vairiables
var upperCaseSelect = document.querySelector("#uppercase");
var lowerCaseSelect = document.querySelector("#lowercase");
var numbersSelect = document.querySelector("#numbers");
var specialSelect = document.querySelector("#specials");

// write arrea where new password goes
const writeArea = document.querySelector("#password");

var lowerCaseChar = makeArray(97, 122);
var upperCaseChar = makeArray(65, 90);
var numberChar = makeArray(48, 57);
var specialChar = makeArray(33, 47)
  .concat(makeArray(58, 64))
  .concat(makeArray(91, 96))
  .concat(makeArray(123, 125));

// create password function
function makePassword(
  characterAmount,
  lowerCaseSelect,
  upperCaseSelect,
  numbersSelect,
  specialSelect
) {
  var possiblePasswordCharinArray = [];
  var passwordCharsinArray = [];

  if (lowerCaseSelect) {
    passwordCharsinArray.push(
      String.fromCharCode(getRandFromArr(lowerCaseChar))
    );
    possiblePasswordCharinArray = possiblePasswordCharinArray.concat(
      lowerCaseChar
    );
  }

  if (upperCaseSelect) {
    passwordCharsinArray.push(
      String.fromCharCode(getRandFromArr(upperCaseChar))
    );
    possiblePasswordCharinArray = possiblePasswordCharinArray.concat(
      upperCaseChar
    );
  }

  if (numbersSelect) {
    passwordCharsinArray.push(String.fromCharCode(getRandFromArr(numberChar)));
    possiblePasswordCharinArray = possiblePasswordCharinArray.concat(
      numberChar
    );
  }

  if (specialSelect) {
    passwordCharsinArray.push(String.fromCharCode(getRandFromArr(specialChar)));
    possiblePasswordCharinArray = possiblePasswordCharinArray.concat(
      specialChar
    );
  }

  for (let i = passwordCharsinArray.length; i < characterAmount; i++) {
    let characterCode = getRandFromArr(possiblePasswordCharinArray);

    passwordCharsinArray.push(String.fromCharCode(characterCode));
  }
  return shuffle(passwordCharsinArray).join("");
}

// function that shuffles the indexes password characters
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var randIndex = Math.floor(Math.random() * arr.length);

    var tempOne = arr[i];
    var tempTwo = arr[randIndex];

    arr[i] = tempTwo;
    arr[randIndex] = tempOne;
  }

  return arr;
}

// function that chooses random characters to possibly use
function getRandFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// function that creates generates array with low and high value
function makeArray(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// synchs value of range bar to number value
function syncBar(event) {
  var value = event.target.value;
  rangeBar.value = value;
  rangeAmount.value = value;
}

// function that moves on to password length page
startBtn.addEventListener("click", function () {
  startPage.style.display = "none";
  rangebarPage.style.display = "block";
});

// function that moves on to password characters
continueBtn.addEventListener("click", function () {
  CheckboxPage.style.display = "block";
  rangebarPage.style.display = "none";
});

// function that submits everything to creat password
submitBtn.addEventListener("click", function () {
  var characterAmount = rangeAmount.value;
  var lowerCaseSelected = lowerCaseSelect.checked;
  var upperCaseSelected = upperCaseSelect.checked;
  var numbersSelected = numbersSelect.checked;
  var specialSelected = specialSelect.checked;

  if (
    !(
      lowerCaseSelected ||
      upperCaseSelected ||
      numbersSelected ||
      specialSelected
    )
  ) {
    return;
  }

  var password = makePassword(
    characterAmount,
    lowerCaseSelected,
    upperCaseSelected,
    numbersSelected,
    specialSelected
  );

  writeArea.innerText = password;
  startPage.style.display = "block";
  CheckboxPage.style.display = "none";
});
