// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {


  // variable to store length of password from user input
  let passwordLength = parseInt(
    prompt ("Please enter the number of characters for your new password (from 10 to 64)"
    )
  )
  
  //Password length must be between 10 and 64 characters
  if (passwordLength < 10 || passwordLength > 64) {
    alert("Password length must be between 10 and 64 characters. Try again!");
    return;
  }

  let lowercase = confirm (
    "Would you like your password to contain lower case letters? Click OK to confirm!"
  )

  let uppercase = confirm (
    "Would you like your password to contain upper case letters? Click OK to confirm!"
  )

  let number = confirm (
    "Would you like to add some numbers to your password? Click OK to confirm!"
  )

  let symbol = confirm (
      "Would you like to add special character? Click OK to confirm!"
  )

  if(lowercase === false &&
    uppercase === false &&
    number === false &&
    symbol === false) {
      alert("You must select at least one type of character");
      return;
  }


  let passwordOptions = {
    passwordLength: passwordLength,
    lowercase: lowercase,
    uppercase: uppercase,
    number: number,
    symbol: symbol
  }

  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}


// Function to generate password with user input
function generatePassword() {

  let options = getPasswordOptions();
  console.log(options)

  let result = [];

  let possibleCharacter = [];


  let guaranteedCharacter = [];

  if(options.lowercase) {
    //Use concat to add arrays together;  store collected values in  possibleCharacter array
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    //Use to get random value from array (here: lowerCaseCharacters) and add it to the end of array (here: guaranteedCharacter) 
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options.uppercase) {
    
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }

  if(options.number) {
    
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if(options.symbol) {
    
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  //Verification
  console.log(possibleCharacter);
  console.log(guaranteedCharacter);

  //Get (number of password length) random values from all values stored in possibleCharacter array 
  for(index = 0; index < options.passwordLength; index++){
    var generated = getRandom(possibleCharacter);
    result.push(generated);
    console.log(generated)
  }
  
  //To make sure all required characters are included in password, replace value of result with same index value of 
  //guaranteedCharacter
  for(index = 0; index < guaranteedCharacter.length; index++){
    result[index] = guaranteedCharacter[index];
  }
  
  //Shuffle all values in result array
  
  function shuffleArray(result) {
    result.sort(() => Math.random() - 0.5);
  }
  shuffleArray(result)
  console.log(result);
  
  return result.join("");
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);