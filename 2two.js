// Define two strings
let firstName = "Md Abdul Ahad";
let lastName = "Linkon";

// Concatenate strings with a space in between
let fullName = firstName + " " + lastName;
console.log(`Concatenated: ${fullName}, Length: ${fullName.length}`);

// Extract a substring (characters from index 0 to 4)
let firstPart = fullName.substring(0, 5); // Note: substring excludes the end index
console.log(`Substring: ${firstPart}`);

// Compare two strings for equality
let areNamesEqual = firstName === lastName;
console.log(`Equal: ${areNamesEqual}`);
