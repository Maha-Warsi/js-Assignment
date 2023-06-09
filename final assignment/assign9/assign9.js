// Question#1

// Prompt the user to enter the city name
var cityName = prompt("Enter the name of your city:");

// Check if the city name is "Karachi"
if (cityName.toLowerCase() === "karachi") {
  document.write("Welcome to the city of lights");
} else {
  document.write("Welcome!");
}

// Question#2
let gender = prompt("Please enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
  console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  console.log("Good Morning Ma'am.");
} else {
  console.log("Invalid input. Please enter 'male' or 'female'.");
}
// Question#3
let inputClr=prompt("What os the color of traffic sognal?")
if (inputClr=="red"){
  alert("must stop");

}else if(inputClr=="yellow"){
  alert("ready to move");

} else {
  alert("Movenow");
}

// Question#4
let remainingFuel = prompt("Please enter the remaining fuel in your car (in litres):");

if (parseFloat(remainingFuel) < 0.25) {
  console.log("Please refill the fuel in your car.");
} else {
  console.log("You have enough fuel in your car.");
}

// Question#5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}
// f.
 if("car" < "cat"){
alert("car is smaller than cat");
}


// Question#6
var marks1=+prompt("enter your marks:");
var marks2=+prompt("enter your marks:");
var marks3=+prompt("enter your marks:");
var percent = ((marks1+marks2+marks3)/300)*100;
var totalmark=marks1+marks2+marks3;
console.log("total marks:300")
console.log("total marks obtained :" + totalmark);
if (percent>=80){
  console.log("your grade is Aone");
  console.log("Remarks:Excellent");

}else if (percent>=70){
  console.log("your grade is A");
  console.log("Remarks:Good");

}else if (percent>=60){
  console.log("your grade is B");
  console.log("Remarks:yo =u need to improve");

} else{
console.log("your grade if f");
console.log("remaks :sorry");
}

// Question#7
let secretNumberr = Math.floor(Math.random() * 10) + 1; // Generates a random secret number between 1 and 10

let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumberr) {
  console.log("Bingo! Correct answer.");
} else if (userGuess === secretNumberr + 1 || userGuess === secretNumberr - 1) {
  console.log("Close enough to the correct answer.");
} else {
  console.log("Wrong guess. The secret number was " + secretNumberr + ".");
}


// Question#8
let number0 = parseInt(prompt("Enter a number:"));

if (number0 % 3 === 0) {
  console.log("The number is divisible by 3.");
} else {
  console.log("The number is not divisible by 3.");
}

// Question#9
let Number2 = parseInt(prompt("Enter a number:"));

if (Number2 % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Question#10
let temperature = parseInt(prompt("Enter the temperature:"));

if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today's Weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today's weather is so Cool.");
} else {
  console.log("The temperature is below 10 degrees.");
}


// Question#11
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let resultt;

if (operation === "+") {
  resultt = firstNumber + secondNumber;
} else if (operation === "-") {
  resultt = firstNumber - secondNumber;
} else if (operation === "*") {
  resultt = firstNumber * secondNumber;
} else if (operation === "/") {
  resultt = firstNumber / secondNumber;
} else if (operation === "%") {
  resultt = firstNumber % secondNumber;
} else {
  console.log("Invalid operation.");
}

if (resultt !== undefined) {
  console.log("Result: " + resultt);
}





