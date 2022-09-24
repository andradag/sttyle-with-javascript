// Logs window object
console.log(window);

// Logs reference to the document in the window object
console.log(window.document);

// Logs root element of document.
console.log(document.documentElement);

// Returns head element of current document
console.log(document.head);

console.log("Document Body: ");
console.log(document.body);

console.log("Children of Document Body: ");
console.log(document.body.children);

console.log("Second child of body: ");
console.log(document.body.children[1]);

console.log("First child of the ul: ");
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");

// Setting style of element
firstChildUl.style.color = "#e97451";
