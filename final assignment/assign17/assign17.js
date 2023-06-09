// Question#1
my_array = [[]];

// Questiohn#2
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 0]
  ];
  
//Question#3
for (var i = 1; i <= 10; i++) {
    console.log(i);
  }

//Question#4
var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

console.log("Multiplication Table of " + tableNumber + ":");

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  console.log(tableNumber + " x " + i + " = " + result);
}

// Question#5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items in the array:");

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Question#6
// Counting: 1 to 15
var counting = "";
for (var i = 1; i <= 15; i++) {
  counting += i + ", ";
}
counting = counting.slice(0, -2); // Remove the last comma and space
document.write("Counting: " + counting + "<br>");

// Reverse counting: 10 to 1
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
reverseCounting = reverseCounting.slice(0, -2);
document.write("Reverse counting: " + reverseCounting + "<br>");

// Even numbers: 0 to 20
var evenNumbers = "";
for (var i = 0; i <= 20; i += 2) {
  evenNumbers += i + ", ";
}
evenNumbers = evenNumbers.slice(0, -2);
document.write("Even: " + evenNumbers + "<br>");

// Odd numbers: 1 to 19
var oddNumbers = "";
for (var i = 1; i <= 19; i += 2) {
  oddNumbers += i + ", ";
}
oddNumbers = oddNumbers.slice(0, -2);
document.write("Odd: " + oddNumbers + "<br>");

// Series: 2k, 4k, 6k, ..., 20k
var series = "";
for (var i = 1; i <= 10; i++) {
  series += 2 * i + "k, ";
}
series = series.slice(0, -2);
document.write("Series: " + series + "<br>");

// Question#7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:");

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}


// Question#8
const A = [24, 53, 78, 91, 12];
let largest = A[0]; // Assume the first element is the largest

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("The largest number in the array is: " + largest);

// Question#9
const A = [24, 53, 78, 91, 12];
let smallest = A[0]; // Assume the first element is the smallest

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log("The smallest number in the array is: " + smallest);


// Question#10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }


