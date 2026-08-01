/*
Assertions, unknown, and error handling
- Type assertions tell TypeScript to trust us for a type, but they should be used carefully.
- `unknown` is safer than `any` because it forces us to verify the value first.
- `Error` checks make runtime error handling more predictable.
Real web use: parsing API data and handling unexpected values in strong apps.
*/

let response: any = "42";

let numericLength:number = (response as string).length

type Book = {
  name:string;
};

let bookString = '{"name":"value"}'
let bookObject = JSON.parse(bookString) as Book // Using ` as Book` is ideal to get the suggestions

console.log(bookObject.name)


const inputElement = document.getElementById("username") as HTMLInputElement

// ---
let value:any = "Hello"

value = 198
value = [1,2,3,4]
console.log(value.toUpperCase()) // There is no error here thats why any is kind of bad in production if you dont know what type of exact data you are handling there is a lot of uncertainity in the data handling using meathods
// also we wont get any suggestions on using any


// Instead ideally try to use the unkown data type with gaurd rails or handlers
let newValue:unknown = "Hello"

newValue = 198
newValue = [1,2,3,4]
if (typeof newValue === "string") {
  console.log(newValue.toUpperCase()) // here in this case we will be getting suggestions as well as no errors
}

// ---


try {


} catch (error) {
  if (error instanceof Error) {
    console.log(error.message)
  }
}


// ---

let data:unknown = "this is the data"
let dataCopy:string = data as string

// ---

type role = "admin" | "user"


function redirect(role:role):void {
  if (role = "admin") {
    console.log("Redirecting to admin dashboard")
    return;
  }
  if (role = "user") {
    console.log("Redirecting to user dashboard")
    return;
  }
  role; // dataType is never
}

function neverReturn():never{
  while (true) {

  }
}