// Question#1

let studentNames = [];
studentNames.push("John");
studentNames.push("Sarah");

// Question#2
let studentNamesS = new Array();
studentNamesS.push("John");
studentNamesS.push("Sarah");

// Question#3
let stringsArray = ["apple", "banana", "orange", "grape"];

// Question#4
let numbersArray = [1, 2, 3, 4, 5];

// Question#5
let booleanArray = [true, false, true, false];

// Question#6
let mixedArray = [1, "apple", true, [2, 4, 6], { name: "John", age: 25 }];

// Question#7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("Qualifications: " + qualifications.join(", "));

// Question#8
let studentNamees = ["John", "Sarah", "David"];
let scores = [420, 380, 450];
let totalMarks = 500;

for (let i = 0; i < studentNamees.length; i++) {
  let percentage = (scores[i] / totalMarks) * 100;
  console.log("Name: " + studentNames[i]);
  console.log("Score: " + scores[i]);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("-------------------------");
}

// Question#9
// Initialize the array with color names
var colors = ["Red", "Green", "Blue"];

// Display the array elements
document.write("Original Array: " + colors.join(", ") + "<br>");

// Ask the user for a color to add to the beginning
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");

// Add the color to the beginning of the array
colors.unshift(colorToAddBeginning);

// Display the updated array
document.write("Array after adding color to the beginning: " + colors.join(", ") + "<br>");

// Ask the user for a color to add to the end
var colorToAddEnd = prompt("Enter a color to add to the end:");

// Add the color to the end of the array
colors.push(colorToAddEnd);

// Display the updated array
document.write("Array after adding color to the end: " + colors.join(", ") + "<br>");

// Add two more colors to the beginning of the array
colors.unshift("Purple", "Yellow");

// Display the updated array
document.write("Array after adding two colors to the beginning: " + colors.join(", ") + "<br>");

// Delete the first color in the array
colors.shift();

// Display the updated array
document.write("Array after deleting the first color: " + colors.join(", ") + "<br>");

// Delete the last color in the array
colors.pop();

// Display the updated array
document.write("Array after deleting the last color: " + colors.join(", ") + "<br>");

// Ask the user for the index and color to add
var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add at index " + indexToAdd + ":");

// Add the color at the desired position/index
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write("Array after adding color at index " + indexToAdd + ": " + colors.join(", ") + "<br>");

// Ask the user for the index and number of colors to delete
var indexToDelete = prompt("Enter the index to delete color(s):");
var numToDelete = prompt("Enter the number of colors to delete from index " + indexToDelete + ":");

// Remove the specified number of colors from the user-defined position/index
colors.splice(indexToDelete, numToDelete);

// Display the updated array
document.write("Array after deleting color(s) from index " + indexToDelete + ": " + colors.join(", ") + "<br>");

// Question#10
// Initialize the array with student scores
var scoress = [78, 92, 85, 65, 91, 87];

// Display the original array
console.log("Original Array: " + scoress.join(", "));

// Sort the array in ascending order
scoress.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted Array: " + scoress.join(", "));


// Question#11

// Initialize the array with city names
var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Initialize the selectedCities array
var selectedCities = [];

// Copy three array elements from cities to selectedCities
selectedCities = cities.slice(0, 3);

// Display the selectedCities array
console.log("selectedCities Array: " + selectedCities.join(", "));


// Question#12

var arr = ["This", "is", "my", "cat"];

// Create a single string from the array using the join method
var result = arr.join(" ");

// Display the resulting string
console.log("Resulting string: " + result);

// Question#13

// Create an empty array
var fifoArray = [];

// Add values to the array
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

// Access and remove values in FIFO order
var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();

// Display the values
console.log("First Value: " + firstValue);
console.log("Second Value: " + secondValue);
console.log("Third Value: " + thirdValue);


// Question#14
// Create an empty array
var lifoArray = [];

// Add values to the array
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

// Access and remove values in LIFO order
var lastValue = lifoArray.pop();
var secondLastValue = lifoArray.pop();
var thirdLastValue = lifoArray.pop();

// Display the values
console.log("Last Value: " + lastValue);
console.log("Second Last Value: " + secondLastValue);
console.log("Third Last Value: " + thirdLastValue);


// Question#15
// Define an array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown/select menu
document.write("<select>");

// Iterate over the phone manufacturers array and generate options for each manufacturer
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}

// Close the select tag
document.write("</select>");





