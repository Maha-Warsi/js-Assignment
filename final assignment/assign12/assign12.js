// Question#1
let input = prompt("Enter a character (number or letter):");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
  console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
  console.log("The input is a lowercase letter.");
} else {
  console.log("Invalid input.");
}

// Question#2
// Function to compare two integers and display the larger one
function compareIntegers(a, b) {
    if (a > b) {
      console.log(a + ' is larger than ' + b);
    } else if (b > a) {
      console.log(b + ' is larger than ' + a);
    } else {
      console.log('Both integers are equal.');
    }
  }
  
  // Get input from the user
  var integer1 = parseInt(prompt('Enter the first integer:'));
  var integer2 = parseInt(prompt('Enter the second integer:'));
  
  // Call the compareIntegers function
  compareIntegers(integer1, integer2);

//   Question#3
// Get input from the user
var number01 = parseFloat(prompt('Enter a number:'));

// Check if the number is positive, negative, or zero
if (number01 > 0) {
  console.log('The number is positive.');
} else if (number01 < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
}

// Question4
// Get input from the user
var character = prompt('Enter a character:');

// Check if the character is a vowel
var vowels = ['a', 'e', 'i', 'o', 'u'];
var isVowel = vowels.includes(character.toLowerCase());

// Display the result
console.log('Is the character a vowel? ' + isVowel);


// Question#5

// Store the correct password
var correctPassword = "myPassword123";

// Ask the user to enter their password
var userPassword = prompt("Enter your password:");

// Validate the passwords
if (userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

// Question#6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Question#7
// Get input from the user
var time = parseInt(prompt('Enter the time in 24-hour clock format:'));

// Convert the time to 12-hour clock format
var hours;
var period;

if (time >= 0 && time <= 1200) {
  hours = Math.floor(time / 100);
  period = 'AM';
} else if (time > 1200 && time <= 2359) {
  hours = Math.floor((time - 1200) / 100);
  period = 'PM';
} else {
  console.log('Invalid time input.');
}

// Display the converted time
if (hours && period) {
  console.log('The time in 12-hour clock format is: ' + hours + period);
}


