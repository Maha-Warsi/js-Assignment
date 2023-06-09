// Question#1
function displayDateTime() {
    var currentDate = new Date();  // Get the current date and time
    var dateTimeElement = document.getElementById("datetime");  // Get the HTML element where you want to display the date and time
  
    // Format the date and time as a string
    var dateTimeString = currentDate.toLocaleString();  // You can customize the format using additional options of toLocaleString()
  
    // Update the HTML element with the current date and time
    dateTimeElement.textContent = dateTimeString;
  }

//   Question#2
displayDateTime();

// QQuestion#3
function greetUser(fName, lName) {
    var fullNAme = fName + " " + lName;
    var greetingSS = "Hello, " + fullNAme + "! Welcome!";
    return greetingSS;
  }
  
//   Question#4
function computeOperation(numz1, numz2, operator) {
    var resultg;
  
    if (operator === "+") {
      resultg = numz1 + numz2;
    } else if (operator === "-") {
      resultg = numz1 - numz2;
    } else if (operator === "*") {
      resultg = numz1 * numz2;
    } else if (operator === "/") {
      resultg = numz1 / numz2;
    } else {
      return "Invalid operator";
    }
  
    document.write("The result of " + numz1 + " " + operator + " " + numz2 + " is: " + resultg);
  }
  
//   Question#5

function squareNumber(num) {
    var squared = num * num;
    return squared;
  }
  console.log("The square of " + number + " is: " + squared);

//   Question#6
var fnumber = 5;
var factorialNumber = factorial(fnumber);
console.log("The factorial of " + fnumber + " is: " + factorialNumber);

// Question#7
function displayCounting(start, end) {
    var counting = '';
    for (var i = start; i <= end; i++) {
      counting += i + ' ';
    }
    document.body.innerHTML = counting;
  }
  
  // Example usage: display counting from 1 to 10
  displayCounting(1, 10);

  
//   Question#8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
  
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  // Example usage: calculate hypotenuse of a right-angle triangle with base = 3 and perpendicular = 4
  var base = 3;
  var perpendicular = 4;
  var hypotenuse = calculateHypotenuse(base, perpendicular);
  
  console.log('Hypotenuse:', hypotenuse);

  
//   Question#9
function calculateRectangleAreaWithVariables(width, height) {
    var area = width * height;
    return area;
  }
  
  // Example usage: calculate area with width = 7 and height = 12
  var width = 7;
  var height = 12;
  var area2 = calculateRectangleAreaWithVariables(width, height);
  
  console.log('Area (with variable arguments):', area2);

  
//   Question#10
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the cleaned string
    var reversedStr = cleanedStr.split('').reverse().join('');
  
    // Check if the cleaned string and reversed string are equal
    return cleanedStr === reversedStr;
  }
  
  // Example usage: check if "madam" is a palindrome
  var inputs = "madam";
  var resultv = isPalindrome(inputs);
  
  console.log(`"${inputs}" is a palindrome:`, resultv);
  
//   Question#11
function capitalizeFirstLetter(str) {
    var words = str.split(' ');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      words[i] = capitalizedWord;
    }
  
    var capitalizedString = words.join(' ');
    return capitalizedString;
  }
  
  // Example usage: capitalize the first letter of each word in the string 'the quick brown fox'
  var inPut = 'the quick brown fox';
  var rEsult = capitalizeFirstLetter(inPut);
  
  console.log('Input:', inPut);
  console.log('Output:', rEsult);

//   Question#12
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage: find the longest word in the string 'Web Development Tutorial'
  var iNput = 'Web Development Tutorial';
  var reSult = findLongestWord(iNput);
  
  console.log('Input:', iNput);
  console.log('Longest word:', reSult);
  
//   Question#13
function countOccurrences(str, letter) {
    var count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage: count the occurrences of the letter 'o' in the string 'JSResourceS.com'
  var inputString = 'JSResourceS.com';
  var targetLetter = 'o';
  var resulta = countOccurrences(inputString, targetLetter);
  
  console.log('Input string:', inputString);
  console.log('Target letter:', targetLetter);
  console.log('Occurrences:', resulta);

//   Question#14
function calcCircumferencee(radiuss) {
    var circumferencee = 2 * Math.PI * radiuss;
    console.log("The circumference is " + circumferencee);
  }
  
  function calcArea(radiuss) {
    var area = Math.PI * Math.pow(radiuss, 2);
    console.log("The area is " + area);
  }
  
  // Example usage: calculate the circumference and area of a circle with radius 5
  var radiuss = 5;
  calcCircumferencee(radiuss);
  calcArea(radiuss);


  
  
  