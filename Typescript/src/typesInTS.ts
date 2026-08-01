/*
Type annotation vs type inference
Annotation means we tell TypeScript the type directly.
Inference means TypeScript guesses the type from the value.
In practice, inference is often enough, but annotations make intent clearer.
Real web use: when building forms, we often want clear types for user input and API data.
*/

// Type annotation is when we explicitly say what the variable should be.
// Type inference is when TypeScript figures it out from the assigned value.

let drink = "chai";
// This line would fail because drink was inferred as a string.
// drink = 0;

// This variable is inferred as a number because the expression results in a number.
let cups = Math.random() > 0.5 ? 10 : 5;

// This variable is explicitly annotated as a string.
let chaiFlavour: string = "masala chai";
chaiFlavour = "Ginger tea";

// This variable is declared without an initial value, so it is typed as boolean.
let chaiOrder: boolean;
chaiOrder = false;