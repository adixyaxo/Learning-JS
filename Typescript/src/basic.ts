/*
TypeScript basics: annotations and simple functions
A type annotation tells TypeScript what kind of value a variable or function should use.
This helps catch mistakes early and makes code easier to read.
Real web use: a greeting function for a profile page or a login form.
*/

// This function accepts one string argument and returns one string value.
function greet(name: string): string {
  return `Greetings to ${name}`;
}

// This variable is explicitly declared as a string.
const username: string = "username";

// Calling the function with the typed variable shows how TypeScript checks the value.
console.log(greet(username));