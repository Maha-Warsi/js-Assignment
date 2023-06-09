// VARIABLE NAMES: LEGAL & ILLEGAL
// Question#1
var variable1, variable2, variable3;

// Question#2
// Legal variable names in JavaScript:

var abc;
var studentName;
var _count;
var myVar;
var totalSales;


// Illegal variable names in JavaScript:

//  var 123abc ;
// //  (starts with a number)
// var my-variable ;
// // (contains a hyphen)
// var #count;
// // (starts with a special character)
// var class ;
// // (reserved keyword in JavaScript)
// var my variable;
// //  (contains a space)


// Question#3
var allowedCharacters = "letters, numbers, underscores, and dollar signs";
var validExamples = "$my_1stVariable";
var validStarters = "letter, underscore, or dollar sign";
var caseSensitive = "sensitive";
var avoidKeywords = "keywords";
var heading = document.getElementById("heading");
heading.innerText = "Rules for Naming JS Variables";
document.write("a) " + heading.innerText + "<br><br>");
document.write("b) Variable names can only contain " + allowedCharacters + ".<br>");
document.write("   For example " + validExamples + "<br><br>");
document.write("c) Variables must begin with a " + validStarters + ".<br>");
document.write("   For example $name, _name, or name<br><br>");
document.write("d) Variable names are case " + caseSensitive + ".<br><br>");
document.write("e) Variable names should not be JS " + avoidKeywords + ".");



