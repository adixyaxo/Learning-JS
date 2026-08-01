/*
Assertions, unknown, and error handling
Type assertions tell TypeScript to trust us about a type, but they should be used carefully.
`unknown` is safer than `any` because it forces us to verify the value before using it.
`Error` checks make runtime error handling more predictable.
Real web use: parsing API data and handling unexpected values in strong apps.
*/

// A type assertion tells TypeScript to treat a value as a specific type.
let response: any = "42";

// This line uses a type assertion to tell TypeScript that the value should be treated as a string.
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

// The JSON string is parsed and then asserted to match the Book structure.
let bookString = '{"name":"value"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

// We can assert that a DOM element is a specific HTML element type.
const inputElement = document.getElementById("username") as HTMLInputElement;

// `any` disables type checks, so this code can silently fail at runtime.
let value: any = "Hello";
value = 198;
value = [1, 2, 3, 4];
console.log(value.toUpperCase());

// `unknown` is safer because we must narrow it before using it.
let newValue: unknown = "Hello";
newValue = 198;
newValue = [1, 2, 3, 4];
if (typeof newValue === "string") {
  console.log(newValue.toUpperCase());
}

// A `try/catch` block can safely handle runtime errors.
try {
  // Some risky code can go here.
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

// This is another example of asserting that an unknown value is a string.
let data: unknown = "this is the data";
let dataCopy: string = data as string;

// A literal union only allows specific values.
type role = "admin" | "user";

// This function accepts only the allowed roles.
function redirect(role: role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role; // At this point, TypeScript sees this branch as `never`.
}

// `never` is used for code that should never complete normally.
function neverReturn(): never {
  while (true) {
    // Infinite loop
  }
}