// PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an argument and returns a random index number from the string argument
randomIndex = str => {
  return Math.floor(Math.random() * str.length);
}

// Example of the randomIndex function
console.log(randomIndex(`chicken`)); // 0, 1, 2, 3, 4, 5, 6

// Function that returns a random lowercase letter
getRandomLower = () => {
  const letters = `abcdefghijklmnopqrstuvwxyz`;
  // Returning a random letter using a random index in the "letters" string
  return letters[randomIndex(letters)];
}

// Example of the getRandomLower function
console.log(getRandomLower()); // Random lowercase letter

// Function that returns a random uppercase letter
getRandomUpper = () => {
  // Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
  const letter = getRandomLower();
  // Changing the random letter to an uppercase letter and returning it from the function
  return letter.toUpperCase();
}

// Example of the getRandomUpper function
console.log(getRandomUpper()); // Random uppercase letter

// Function that returns a random number (AKA Random number as a string value)
getRandomNumber = () => {
  const numbers = `0123456789`;
  // Returning a random number using a random index in the "numbers" string
  return numbers[randomIndex(numbers)];
}

// Example of the getRandomNumber function
console.log(getRandomNumber()); // Random number from the "numbers" string

// Function that returns a random symbol (AKA Random symbol as a string value)
getRandomSymbol = () => {
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  // Returning a random symbol using a random index in the "symbols" string
  return symbols[randomIndex(symbols)];
}

// Example of the getRandomSymbol function
console.log(getRandomSymbol());

// Object to store all the character generator functions
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultElement = document.querySelector(`#result`);
const clipboardElement = document.querySelector(`#clipboard`);
const lowercaseElement = document.querySelector(`#lowercase`);
const uppercaseElement = document.querySelector(`#uppercase`);
const numbersElement = document.querySelector(`#numbers`);
const symbolsElement = document.querySelector(`#symbols`);
const lengthElement = document.querySelector(`#length`);
const generateElement = document.querySelector(`#generate`);

// Function that accepts true or false values as well as a number as arguments
// NOTE: The checkbox inputs (booleans) and number (AKA Length) input  will determine the value/arguments entered into this function

generatePassword = (lower, upper,number, symbol, length) => {

  console.log(lower, upper,number, symbol, length);
  // 1. CREATE THE PASSWORD VARIABLE
  let generatedPassword = ``;
  
  // 2. FILTER OUT UNCHECKED OPTIONS
  // True and false values (boolean) can be added together (True is 1 and false is 0)
  // NOTE: The value set to typesCount will be used when building the password (Step 4)
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);

    // If the user has not selected any of the four options, then display an alert and return an empty string from the function so the password displayed will just be an empty string
  if (typesCount === 0){
    alert (`Please select at least one option`);
    // The RETURN keyword stops/ends the execution of a function (AKA Does not run any of the code on the lines that follow it in the function)
    return ``;
  }

  // Creating an array of arrays. The first item in each nested array holds the value of a string that will be used to access a function in the randomFunctions object. Also, the second item in each nested array is one of the values passed into this generatePassword function.
  let typesArray = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol]
  ];
  console.log(typesArray);

  // The filter method creates a new array with all the items that "pass the test" implemented by the provided function (AKA All the items that cause the function to return a boolean value of true when the function is run using the item as an argument for the item parameter in this example)
  // Checking if the value for  index of 1 (AKA the values passed into the generatePassword function) each item in the array is true or false. Also, removing the item from the array if it is false
 typesArray = typesArray.filter(item => { // anonymous arrow function | 'item' is the parameter
    console.log(item[1]);
    return item[1];
  });
  console.log(`typesArray:`, typesArray);

  // 3. LOOP OVER THE LENGTH AND  CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
  // Building password with a for loop
  // NOTE: The value for "length" is the value selected for the length number input
  for (i = 0; i < length; i += typesCount){
    // One of the items in the updated/filtered version of the typesArr will be the value/argument passed into for the type parameter each time the anonymous arrow function is run/executed
    typesArray.forEach(type => {//anonymous arrow function 'type' is the parameter
      const funcName = type[0]; //index of 0 is the string value in the typesArray
      console.log(funcName);
      // Accessing and running/executing a function in the randomFunctions object. Also, concatenating/adding the value returned from the accessed function to the generatedPassword string variable
      generatedPassword += randomFunctions[funcName]();
      console.log(generatedPassword);
    });
  }

  // 4. ADD THE GENERATED PASSWORD TO THE FINAL PASSWORD VARIABLE AND RETURN IT FROM THE FUNCTION
  // Removing extra characters if necessary (The above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected)
  const finalPassword = generatedPassword.slice(0,length);
  console.log(finalPassword);

  return finalPassword;
}

// Example of the generatePassword function
// NOTE: Using the starting value for when the page first loads
generatePassword(true, true, true, true, 4);

// Event listener for when the "Generate Password" button is clicked
generateElement.addEventListener(`click`, () => {
  // Checking if the following options/checkboxes are selected/checked and setting the true or false values to the respective variables
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;
  
  // Accessing the value for the number input and changing the value from a string to a number
  // NOTE: The value returned from a number input is a string value

  const length = parseInt(lengthElement.value);

  console.log(hasLower, hasUpper, hasNumber, hasSymbol,length);

  // The generatePassword function takes the true/false values determined by the checkboxes as well as the number from the number input as arguments and returns a string (AKA The Password) which is set as the innerText value for the "result" (AKA Span) element
  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,length);
});
