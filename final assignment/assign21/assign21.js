// Question#1
const firstNamee = prompt("Enter your first name:");
const lastNamee = prompt("Enter your last name:");

const fullNamee = firstNamee + " " + lastNamee;

console.log("Hello, " + fullNamee + "! Welcome.");

// Question#2
const favoriteModel = prompt("What is your favorite mobile phone model?");

const length = favoriteModel.length;

console.log("The length of your input is: " + length);

// Question#3
const word = "Pakistani";
const letter = "n";

const index = word.indexOf(letter);

console.log("The index of letter 'n' in the word 'Pakistani' is: " + index);


// Question#4
const Word = "Hello World";
const Letter = "l";

const lastIndex = Word.lastIndexOf(Letter);

console.log("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);

// Question#5
const word1 = "Pakistani";
const index1 = 3;

const character1 = word1.charAt(index);

console.log("The character at the 3rd index in the word 'Pakistani' is: " + character1);

// Question#6
// Prompt the user for their first name
var firstNamE = prompt("Enter your first name:");

// Prompt the user for their last name
var lastNamE = prompt("Enter your last name:");

// Concatenate the first and last name into a full name
var fullNamE = firstNamE + " " + lastNamE;

// Greet the user using their full name
alert("Hello, " + fullNamE + "! Welcome!");


// Question7
// Define the original word
var word2 = "Hyderabad";

// Replace "Hyder" with "Islam" in the word
var replacedWord = word2.replace("Hyder", "Islam");

// Display the result in the browser
document.write("Original Word: " + word2 + "<br>");
document.write("Replaced Word: " + replacedWord);

// Questoin#8
// Define the original string
var messageE = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" in the string
var replacedMessage = messageE.replace(/and/g, "&");

// Display the result in the browser
document.write("Original Message: " + messageE + "<br>");
document.write("Replaced Message: " + replacedMessage);

// Question#9
// Define the string
var str = "472";

// Convert the string to a number
var numm = Number(str);

// Display the values and types in the browser
document.write("String value: " + str + "<br>");
document.write("String type: " + typeof str + "<br><br>");
document.write("Number value: " + numm + "<br>");
document.write("Number type: " + typeof numm);

// Question#10
// Prompt the user for input
var userInputt = prompt("Enter your input:");

// Convert the input to uppercase
var uppercaseInputt = userInputt.toUpperCase();

// Display the uppercase input
alert("Uppercase input: " + uppercaseInputt);

// Question#11
// Prompt the user for input
var userInput0 = prompt("Enter a string:");

// Function to convert string to title case
function toTitleCase(strr) {
  // Split the string into an array of words
  var wordm = strr.toLowerCase().split(" ");

  // Iterate over each word and capitalize the first letter
  for (var i = 0; i < wordm.length; i++) {
    wordm[i] = wordm[i][0].toUpperCase() + wordm[i].substring(1);
  }

  // Join the words back into a string
  var titleCaseStr = wordm.join(" ");

  return titleCaseStr;
}

// Convert the user input to title case
var titleCaseInput = toTitleCase(userInput0);

// Display the result
console.log("Title Case: " + titleCaseInput);


// Question#12
var nUm = 35.36;

// Convert the number to a string and remove the dot
var numAsString = nUm.toString().replace(".", "");

// Display the result
document.write(numAsString);

// Question#13
// Prompt the user for a username
var user1name = prompt("Enter a username:");

// Function to check if the username contains any special symbols
function containsSpecialSymbols(user1name) {
  var specialSymbols = ["@", ".", ",", "!"];

  for (var i = 0; i < specialSymbols.length; i++) {
    if (user1name.includes(specialSymbols[i])) {
      return true;
    }
  }

  return false;
}

// Check if the username contains any special symbols
if (containsSpecialSymbols(user1name)) {
  // Prompt the user to enter a valid username
  user1name = prompt("Invalid username! Please enter a valid username:");
}

// Display the username
console.log("Username: " + user1name);

// Question#14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var userInput = prompt("Enter an item to search:");

// Function to perform case-insensitive search in the array
function searchItem(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === item.toLowerCase()) {
      return true;
    }
  }

  return false;
}

// Perform the search
var found = searchItem(A, userInput);

// Display the result
if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

// Question#15
// Prompt the user for a password
var passwordd = prompt("Enter a password:");

// Function to check if the password meets the requirements
function isValidPassword(passwordd) {
  // Check the length of the password
  if (passwordd.length < 6) {
    return false;
  }

  // Check if the password starts with a number
  if (!isNaN(passwordd.charAt(0))) {
    return false;
  }

  // Check if the password contains both alphabets and numbers
  var hasAlphabet = false;
  var hasNumber = false;

  for (var i = 0; i < passwordd.length; i++) {
    var charCode = passwordd.charCodeAt(i);

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      hasAlphabet = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  return hasAlphabet && hasNumber;
}

// Check if the password is valid
if (!isValidPassword(passwordd)) {
  // Prompt the user to enter a valid password
  password = prompt("Invalid password! Please enter a valid password:");
}

// Display the password
console.log("Password: " + passwordd);

// Question#16
var university = "University of Karachi";

// Convert the string to an array using the split method
var array = university.split(" ");

// Display the elements of the array in the browser
for (var i = 0; i < array.length; i++) {
  document.write("Element " + (i + 1) + ": " + array[i] + "<br>");
}

// Questoin#17
// Prompt the user for input
var userINput = prompt("Enter a string:");

// Get the last character of the input
var lastCharacter = userINput.charAt(userINput.length - 1);

// Display the last character
console.log("Last Character: " + lastCharacter);

// Question#18
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCountt = "the";

// Convert the sentence to lowercase for case-insensitive matching
var lowercaseSentence = sentence.toLowerCase();

// Split the sentence into an array of words
var words = lowercaseSentence.split(" ");

// Count the occurrences of the word
var countt = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCountt) {
    countt++;
  }
}

// Display the count
console.log("Occurrences of '" + wordToCount + "': " + countt);



