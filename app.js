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
