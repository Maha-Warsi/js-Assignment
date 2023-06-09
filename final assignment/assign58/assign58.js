
    // i. Get element of id "main-content" and assign them in a variable.
    var mainContent = document.getElementById("main-content");

    // ii. Display all child elements of "main-content" element.
    var childElements = mainContent.children;
    console.log(childElements);

    // iii. Get all elements of class "render" and show their innerHTML in browser.
    var renderElements = document.getElementsByClassName("render");
    for (var i = 0; i < renderElements.length; i++) {
      console.log(renderElements[i].innerHTML);
    }

    // iv. Fill input value whose element id is "first-name" using JavaScript.
    var firstNameInput = document.getElementById("first-name");
    firstNameInput.value = "Alex";

    // v. Repeat part iv for id "last-name" and "email".
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");

    lastNameInput.value = "Bank";
    emailInput.value = "alexbank@example.com";

    // Q2

      // i. What is node type of element having id "form-content".
      var formContentElement = document.getElementById("form-content");
      var formContentType = formContentElement.nodeType;
      var formContentTypeText = "";
      switch (formContentType) {
        case 1:
          formContentTypeText = "Element Node";
          break;
        case 3:
          formContentTypeText = "Text Node";
          break;
        case 9:
          formContentTypeText = "Document Node";
          break;
        default:
          formContentTypeText = "Unknown Node";
      }
  
      // ii. Show node type of element having id "lastName" and its child node.
      var lastNameElement = document.getElementById("lastName");
      var lastNameElementType = lastNameElement.nodeType;
      var lastNameElementTypeText = "";
      switch (lastNameElementType) {
        case 1:
          lastNameElementTypeText = "Element Node";
          break;
        case 3:
          lastNameElementTypeText = "Text Node";
          break;
        default:
          lastNameElementTypeText = "Unknown Node";
      }
  
      var lastNameChildNode = lastNameElement.childNodes[0];
  
      // iii. Update child node of element having id "lastName".
      lastNameChildNode.nodeValue = "Updated Last Name: Smith";
  
      // iv. Get First and last child of id "main-content".
      var mainContentElement = document.getElementById("main-content");
      var firstChild = mainContentElement.firstChild;
      var lastChild = mainContentElement.lastChild;
  
      // v. Get next and previous siblings of id "lastName".
      var lastNameElement = document.getElementById("lastName");
      var nextSibling = lastNameElement.nextSibling;
      var previousSibling = lastNameElement.previousSibling;
  
      // vi. Get parent node and node type of element having id "email".
      var emailElement = document.getElementById("email");
      var parentNode = emailElement.parentNode;
      var parentNodeNodeType = parentNode.nodeType;
      var parentNodeNodeTypeText = "";
      switch (parentNodeNodeType) {
        case 1:
          parentNodeNodeTypeText = "Element Node";
          break;
        case 3:
          parentNodeNodeTypeText = "Text Node";
          break;
        default:
          parentNodeNodeTypeText = "Unknown Node";
      }
  
      // Displaying the results on the browser
      window.onload = function() {
        var resultDiv = document.getElementById("results");
  
        resultDiv.innerHTML += "<p>Node type of element with id 'form-content': " + formContentTypeText + "</p>";
        resultDiv.innerHTML += "<p>Node type of element with id 'lastName': " + lastNameElementTypeText + "</p>";
        resultDiv.innerHTML += "<p>Child node of element with id 'lastName' (before update): " + lastNameChildNode.nodeValue + "</p>";
        resultDiv.innerHTML += "<p>First child of element with id 'main-content': " + firstChild.nodeName + "</p>";
        resultDiv.innerHTML += "<p>Last child of element with id 'main-content': " + lastChild.nodeName + "</p>";
        resultDiv.innerHTML += "<p>Next sibling of element with id 'lastName': " + nextSibling.nodeName + "</p>";
        resultDiv.innerHTML += "<p>Previous sibling of element with id 'lastName': " + previousSibling.nodeName + "</p>";
        resultDiv.innerHTML += "<p>Parent node of element with id 'email': " + parentNode.nodeName + "</p>";
        resultDiv.innerHTML += "<p>Node type of parent node of element with id 'email': " + parentNodeNodeTypeText + "</p>";
      };
