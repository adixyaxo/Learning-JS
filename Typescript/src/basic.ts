/*
TypeScript basics: annotations and simple functions
- We use `string` and `number` to describe what data should look like.
- TypeScript helps catch mistakes before the app runs.
- A function signature tells us the input and output shape.
Real web use: a greeting function for a profile page or a login form.
*/

function greet(name:string):string {
return `Greetings to ${name}`
}
const username:string = "username"

console.log(greet(username))