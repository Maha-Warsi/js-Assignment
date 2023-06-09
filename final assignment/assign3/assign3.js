// variables for numbers
// Question#1
var age;
age="22";
alert("I am "+ age +"years old");

// Question#2

    // Check if the visitorCounter variable exists in localStorage
    var visitorCounter = localStorage.getItem("visitorCounter");

    // If visitorCounter is null or undefined, initialize it to 0
    if (!visitorCounter) {
      visitorCounter = 0;
    }

    // Increment the visitorCounter
    visitorCounter++;

    // Store the updated visitorCounter value in localStorage
    localStorage.setItem("visitorCounter", visitorCounter);

    // Display the number of visits on the web page
    document.write("You have visited this site " + visitorCounter + " time(s).");

// Question#3

var birthyear;
birthyear="2001";
document.write("my birthyear is "+ birthyear +"\n data type of my declared variable is number");

// Question#4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

// Display the message in the browser
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
document.write(message);



