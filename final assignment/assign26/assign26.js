// Question#1
// Prompt the user to enter a positive integer
var number = parseInt(prompt("Enter a positive integer:"));

// Check if the input is a positive integer
if (isNaN(number) || number <= 0) {
  alert("Invalid input. Please enter a positive integer.");
} else {
  // Display the number
  document.write("Number: " + number + "<br>");

  // Display the rounded value
  var roundedValue = Math.round(number);
  document.write("Round off value: " + roundedValue + "<br>");

  // Display the floor value
  var floorValue = Math.floor(number);
  document.write("Floor value: " + floorValue + "<br>");

  // Display the ceiling value
  var ceilValue = Math.ceil(number);
  document.write("Ceil value: " + ceilValue + "<br>");
}

// Question#2
// Prompt the user to enter a negative floating-point number
var negnumber = parseFloat(prompt("Enter a negative floating-point number:"));

// Check if the input is a negative floating-point number
if (isNaN(negnumber) || negnumber >= 0) {
  alert("Invalid input. Please enter a negative floating-point number.");
} else {
  // Display the number
  document.write("Number: " + negnumber + "<br>");

  // Display the rounded value
  var roundedValuee = Math.round(number);
  document.write("Round off value: " + roundedValuee + "<br>");

  // Display the floor value
  var floorValuee = Math.floor(number);
  document.write("Floor value: " + floorValuee + "<br>");

  // Display the ceiling value
  var ceilValuee = Math.ceil(negnumber);
  document.write("Ceil value: " + ceilValuee + "<br>");
}

// Question#3
// Prompt the user to enter a number
var numberk = parseFloat(prompt("Enter a number:"));

// Calculate the absolute value
var absoluteValue = Math.abs(numberk);

// Display the result
document.write("The absolute value of " + numberk + " is " + absoluteValue);

// Question#4
// Generate a random number between 1 and 6 (inclusive) to simulate a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value
document.write("The dice rolled: " + diceValue);

// Question#5
// Generate a random number between 0 and 1 to simulate a coin toss
var coinValue = Math.random();

// Check the coin toss result
var coinResult;
if (coinValue < 0.5) {
  coinResult = "Heads";
} else {
  coinResult = "Tails";
}

// Display the coin value
document.write("The coin landed on: " + coinResult);

// Question#6
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number
document.write("Random number between 1 and 100: " + randomNumber);

// Question#7
// Prompt the user to enter their weight
var userInputn = prompt("Enter your weight:");

// Remove non-digit characters and convert to number
var weight = parseFloat(userInputn.replace(/[^\d.]/g, ""));

// Display the weight
document.write("Your weight is: " + weight + " kgs");

// Question#8
// Generate a random secret number between 1 and 10
var secretNumberr = Math.floor(Math.random() * 10) + 1;

// Prompt the user to enter a number
var userInputh = parseInt(prompt("Enter a number between 1 and 10:"));

// Check if the user input matches the secret number
if (userInputh === secretNumberr) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, your guess was incorrect. The secret number was: " + secretNumberr);
}




