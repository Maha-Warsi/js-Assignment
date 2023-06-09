// Question#1
var currentDate = new Date();
    
    // Format the date and time as a string
    var dateTimeString = currentDate.toLocaleString();
    
    // Display the date and time in the browser
    document.write("Current Date and Time: " + dateTimeString);

    // Question#2
    var currentDate = new Date();

    // Array of month names
    var monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Get current month
    var currentMonth = currentDate.getMonth();
  
    // Get the month name from the array
    var currentMonthName = monthNames[currentMonth];
  
    // Alert the current month
    alert("Current Month: " + currentMonthName);
    //
    // Questin#3
    var currentDate = new Date();

  // Array of day names
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get current day
  var currentDay = currentDate.getDay();

  // Get the day name from the array
  var currentDayName = dayNames[currentDay];

  // Alert the first three letters of the current day
  alert("Current Day: " + currentDayName);

//   Queestion#4
var currentDate = new Date();

  // Get current day
  var currentDay1 = currentDate.getDay();

  // Check if it's Saturday (6) or Sunday (0)
  if (currentDay1 === 6 || currentDay1 === 0) {
    alert("It's Fun day");
  }

//   Question#5
var currentDate = new Date();

// Get the current day of the month
var currentDay2 = currentDate.getDate();

// Check if the current day is less than 16
if (currentDay2 < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// Question#6
  // Create a new Date object representing the current time
  var currentDate = new Date();

  // Get the time value in minutes since midnight, Jan. 1, 1970
  var minutesSinceEpoch = currentDate.getTime() / (1000 * 60);

  // Assign the minutes to a new variable
  var minutesSinceMidnight = minutesSinceEpoch;

  // Display the result
  console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);

//   Question#7
 // Get the current hour (in 24-hour format)
 var currentHour0 = currentDate.getHours();

 // Check if it's before noon (AM)
 if (currentHour0 < 12) {
   alert("It's AM");
 } else {
   alert("It's PM");
 }

//  Question#8
var laterDate = new Date(2020, 11, 31);

  // Display the laterDate
  console.log("laterDate: " + laterDate);

//   Question#9
var startingDate = new Date(2015, 5, 18); // Month is zero-based, so 5 represents June

// Create a Date object for the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDiff = currentDate.getTime() - startingDate.getTime();

// Convert the time difference to days
var daysPast = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Alert the number of days past since 1st Ramadan
alert("Number of days past since 1st Ramadan: " + daysPast);

// Question#10

var referenceDate = new Date("2010-01-01");

// Create a Date object for the beginning of 2015
var beginningOf2015 = new Date("2015-01-01");

// Calculate the time difference in seconds
var timeDiff = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;

// Display the number of seconds elapsed
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + timeDiff);


// Question#11

var currentDate = new Date();

  // Extract the hours from the current date
  var currentHours3 = currentDate.getHours();

  // Reset the date object an hour ahead
  currentDate.setHours(currentHours3 + 1);

  // Display the updated date object in the browser
  document.write("Updated Date and Time: " + currentDate);


//   Question#12
// Create a Date object
var currentDate = new Date();

// Subtract 100 years from the current date
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Get the formatted date string
var formattedDate = currentDate.toDateString();

// Show the date in an alert box
alert("100 years ago, the date was: " + formattedDate);

// Question#13

// Prompt the user for their age
var age = prompt("Please enter your age:");

// Get the current year
var currentYear = new Date().getFullYear();

// Calculate the birth year
var birthYear = currentYear - age;

// Display the birth year in the browser
document.write("Your birth year is: " + birthYear);


// Question#14

// Prompt the user for input
var customerName = prompt("Enter customer name:");
var currentMonthh = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurchargeRate = parseFloat(prompt("Enter late payment surcharge rate (%):"));

// Calculate the net amount payable within due date
var netAmountPayable = numberOfUnits * chargesPerUnit;

// Calculate the late payment surcharge
var latePaymentSurcharge = (latePaymentSurchargeRate / 100) * netAmountPayable;

// Calculate the gross amount payable after due date
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round off all amounts to 2 decimal places
netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Display the bill details in the browser
document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonthh + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");

