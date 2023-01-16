// Function to generate password with user input

function generatePassword() {
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
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

    var possibleCharacters = [];
    var guaranteedCharacter = [];
    

    // prompt user for password options

    let passwordLength = prompt(
      "Please enter the number of characters for your new password. Choose between 10-64 characters."
      );

    if (passwordLength < 10 || passwordLength > 64) {
      alert("Password length should be between 10 and 64 characters. Try again!");

      return;
    }

    let lowercase = confirm(
      "Would you like your password to contain lower case letters? Click OK to confirm!"
      );

    let uppercase = confirm(
      "Would you like your password to contain upper case letters? Click OK to confirm!"
      );

    let numbers = confirm(
      "Would you like to add some numbers to your password? Click OK to confirm!"
      );

    let symbol = confirm(
      "Would you like to add special character? Click OK to confirm!"
      );

    
    //Alert when all options are not confirmed

    if (lowercase === false && 
        uppercase === false && 
        numbers === false && 
        symbol === false) {
            alert("You must select at least one type of character");

            return;
    }

    //Function for getting a random element from an array
    function getRandom(arr) {
      let randomIndex = Math.floor(Math.random() * arr.length)
      let randomElement = arr[randomIndex];
      
      return randomElement;
    }

    
      //Use concat to add selected arrays together and store characters in var possibleCharacters
      if (lowercase === true) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacter.push(getRandom(lowerCasedCharacters));
      } 

      if (uppercase === true) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacter.push(getRandom(upperCasedCharacters));
      }

      if (numbers === true) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacter.push(getRandom(numericCharacters));     
      } 


      if (symbol === true) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacter.push(getRandom(specialCharacters));
      } 

      //Checking if above statements are correct 
      console.log(possibleCharacters)
      console.log(guaranteedCharacter)
      console.log(passwordLength);

      // pick random character index out of possibleCharacters array 
      
      let finalPassword = [];
      for ( let i=0; i<passwordLength; i++) {
        var generated = getRandom(possibleCharacters);
        console.log(generated);
        finalPassword.push(generated);
      }
      
      console.log(passwordLength);
      console.log(finalPassword.length);
      return finalPassword.join("");
    }    



    
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

    
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
    
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);