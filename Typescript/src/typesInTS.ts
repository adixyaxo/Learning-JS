/*
Type annotation vs type inference
- Annotation means we tell TypeScript the type directly.
- Inference means TypeScript guesses the type from the value.
- In practice, inference is often enough, but annotations make intent clear.
Real web use: when building forms, we often want clear types for user input and API data.
*/

// Annotation Matlab Mei Samjhaunga
// Inference matlab apne app samajh jao

let drink = "chai"
// drink = 0 this would give an error
let cups = Math.random() > 0.5 ? 10:5

let chaiFlavour:string = "masala chai"
chaiFlavour = "Ginger tea"

let chaiOrder:boolean

chaiOrder = false