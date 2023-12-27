'use strict';

// LOOP EXAMPLE 

// Created two variables
let total = 0, count = 1; 

// loop repeats as long as count is less than or equal to 10
while (count <= 10) {
  // adds current value of count to the total
  total += count; 
  // increases count by 1 in each iteration
  count += 1; 
}

console.log(total); 

// VALUES, TYPES, AND OPERATORS

// PHONEBOOK PROGRAM


// Array of objects
let phoneBook = [
  { name: "Alice", phone: "757-1234"}, 
  { name: "Carlos", phone: "843-1234"},
  { name: "Menfi", phone: "504-1234"},
  { name: "Keneth", phone: "280-1234"},
  { name: "Linkar", phone: "145-1234"},
  { name: "Pancho", phone: "150-1234"},
  { name: "Pirlo", phone: "876-1234"},
  { name: "Jose", phone: "997-1234"},
  { name: "Anuel", phone: "741-1234"},
  { name: "Batman", phone: "852-1234"},
  { name: "Robbim", phone: "963-1234"},
]

// Function take name and will implement the search algorithm
function findPerson(name) {

  // Initialization: represents the initial seach range
  let startIndex = 0; 
  let endIndex = phoneBook.length - 1; 


  // Search loop
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    let middleName = phoneBook[middleIndex].name;

    // Comparison 
    if (name === middleName) {
        return "Person found! Calling " + phoneBook[middleIndex].phone + ".";
    } else if (name < middleName) {
        endIndex = middleIndex - 1;
    } else {
        startIndex = middleIndex + 1;
    }
}

  return "Person not found in the phone book.";
}
 

let personName = prompt("Enter person's name: ");
let result = findPerson(personName);
console.log(result);
