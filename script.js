// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password.length == 0){
    passwordText.value = "Please review selected criteria.";
  }

  else {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var criteria = getCriteria();
  if (criteria.length == 0){
    return "";
  }

  var chars = criteria[0];
  var length = criteria[1];
  var password = "";
  var ind = 0;

  // for loop
  for (i = 0; i < length; i++){
    ind = Math.floor(Math.random() * chars.length);
    password += chars[ind];
  }

  return password;
}

function getCriteria() {
  var isLower = document.getElementById("isLower").checked;
  var isUpper = document.getElementById("isUpper").checked;
  var isNumber = document.getElementById("isNumber").checked;
  var isSpecial = document.getElementById("isSpecial").checked;
  var length = document.getElementById("length").value;
  var chars = "";

  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var numbers = "0123456789";
  var special = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  // get criteria

  if (isLower){
    chars += lower;
  }

  if (isUpper){
    chars += upper;
  }

  if (isNumber){
    chars += numbers;
  }

  if (isSpecial){
    chars += special;
  }

  if (chars.length == 0 || length < 8 || length > 128){
    return "";
  }

  return [chars, length];
}