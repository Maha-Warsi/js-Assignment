// Question#1
// Prompt the user to enter a number
var number = prompt("Enter a number:");

// Parse the input string to a number
number = parseFloat(number);

// Perform the required arithmetic operations
var square = number * number;
var cube = number * number * number;
var squareRoot = Math.sqrt(number);
var absoluteValue = Math.abs(number);

// Create a message with the results
var message = "Number: " + number + "<br>";
message += "Square: " + square + "<br>";
message += "Cube: " + cube + "<br>";
message += "Square Root: " + squareRoot + "<br>";
message += "Absolute Value: " + absoluteValue;

// Display the message in the browser
document.write(message);

// Question#2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Step 1: --a;
// The --a operation is a pre-decrement operator, which subtracts 1 from the variable a before using its value. So, --a reduces the value of a from 2 to 1. The value of a is now 1.

// Step 2: --a - --b;
// Similar to the previous step, --a subtracts 1 from a (resulting in 0), and --b subtracts 1 from b (resulting in 0). The subtraction operation 0 - 0 yields 0.

// Step 3: --a - --b + ++b;
// Following the same pattern, --a reduces the value of a from 1 to 0, --b subtracts 1 from b (resulting in -1), and ++b adds 1 to b (resulting in 0). The addition operation 0 - (-1) + 0 gives 1.

// Step 4: --a - --b + ++b + b--;
// In this step, --a subtracts 1 from a (resulting in -1), --b subtracts 1 from b (resulting in -2), ++b adds 1 to b (resulting in -1), and b-- subtracts 1 from b but uses the original value before the decrement (so it still evaluates to -1). The addition operation -1 - (-2) + (-1) + (-1) gives 1.

// After executing the script, the value of a is -1, the value of b is -1, and the value of result is 1.
// Question#3
var userName = prompt("What is your name");
alert("Hello"+ userName);

// Question#5
// Prompt the user to enter a number
var number1 = prompt("Enter a number:");

// Parse the input string to a number
number1 = parseInt(number);

// If the user didn't enter a new number, set it to 5
if (isNaN(number1)) {
  number1 = 5;
}

// Create a message with the multiplication table
var message1 = "Multiplication Table of " + number1 + "<br>";
for (var i = 1; i <= 10; i++) {
  var result1 = number1 * i;
  message1 += number1 + " x " + i + " = " + result1 + "<br>";
}

// Display the message in the browser
document.write(message1);


// Question#6

// Prompt the user to enter three subject names
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

// Total marks for each subject
var totalMarks = 100;

// Prompt the user to enter obtained marks for each subject
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for subject 1:"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for subject 2:"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for subject 3:"));

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Create a table to display the results
var tablee = "<table>";
tablee += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
tablee += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>";
tablee+= "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>";
tablee += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>";
tablee += "<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>";
tablee += "<tr><th>Percentage</th><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr>";
tablee += "</table>";

// Display the table in the browser
document.write(tablee);
