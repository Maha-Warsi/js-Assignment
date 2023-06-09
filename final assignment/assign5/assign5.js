// MATH EXPRESSIONS
// Question#1:
var num1=+prompt("Enter 1st num :");
var num2=+prompt("Enter 2nd num:");
var sum = num1+num2;
document.write("sum of"+ num1 + num2 +"is" + sum);
// Question#2:
var subtract = num1-num2;
document.write("Subtract "+ num2 + "from "+ num1 +"is "+ subtract);
var multiply = num1*num2;
document.write("The multiplication of" + num1 + "and " + num2 +"is" + multiply);
var mod= num1 % num2;
document.write("the mod of " +num1 + "and" + num2 + "is" + mod);

// Question#3:
var Num;
document.write("Value after variable declaration is undefined");
Num = 5;
document.write("Initialvalue: 5");
Num++;
document.write("Value after increment is: 6");
Num +=7;
document.write("Value after addition is: 13");
Num --;
document.write("Value after decrement is: 12");
var remainder =Num%3;
document.write("the remainder is"+remainder);

// Question#4
var movieTicket=600;
TicketPrice= movieTicket*5;
document.write("The cost of buying 5 tickets is Rs" + TicketPrice );

// Question#5
let table=17;
for(let i=1;i<=10;i++){
    console.log(table +"x"+ i + "="+table*i);
}
// Question#6
 // Celsius to Fahrenheit conversion
 var celsius = 30;
 var fahrenheit = (celsius * 9/5) + 32;
 document.write(celsius + "°C is " + fahrenheit + "°F<br>");

 // Fahrenheit to Celsius conversion
 var fahrenheit2 = 86;
 var celsius2 = (fahrenheit2 - 32) * 5/9;
 document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

//  Question#7
// Store the variables
var priceOfItem1 = 10; // Example price of item 1
var priceOfItem2 = 20; // Example price of item 2
var orderedQuantityOfItem1 = 2; // Example ordered quantity of item 1
var orderedQuantityOfItem2 = 3; // Example ordered quantity of item 2
var shippingCharges = 5; // Example shipping charges

// Calculate the total cost
var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h1>Receipt</h1>");
document.write("<p>Price of Item 1: $" + priceOfItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceOfItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + orderedQuantityOfItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + orderedQuantityOfItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");


// Question#8
var totalMarks = 100; // Example total marks
var marksObtained = 85; // Example marks obtained

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h1>Percentage Calculation</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage + "%</h3>");

// Question#9
var usdToPkrRate = 169.5; // Exchange rate of 1 US dollar to Pakistani Rupees
var sarToPkrRate = 45.1; // Exchange rate of 1 Saudi Riyal to Pakistani Rupees
var totalUsd = 10; // Total US dollars
var totalSar = 25; // Total Saudi Riyals

var totalPkr = (totalUsd * usdToPkrRate) + (totalSar * sarToPkrRate);

document.write("Total Pakistani Rupees: " + totalPkr);

// Question#10
var numberr = 7; // Initial number

var results = ((numberr + 5) * 10) / 2;

console.log("Result: " + results);

// Question#11
var currentYear = 2023; // Current year
var birthYear = 1990; // Birth year

var age1 = currentYear - birthYear; // First possible age
var age2 = age1 - 1; // Second possible age

console.log("They are either " + age1 + " or " + age2 + " years old.");

// Question#12
var radius = 5; // Radius of the circle

var circumference = 2 * Math.PI * radius; // Calculate the circumference

console.log("The circumference is " + circumference);

// Question#13
var favoriteSnack = "chocolate bars"; // Favorite snack
var currentAge = 25; // Current age
var maximumAge = 80; // Maximum age
var amountPerDay = 2; // Estimated amount per day

var yearsRemaining = maximumAge - currentAge; // Calculate the number of years remaining
var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay; // Calculate the total snacks needed

console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");


