// Learning to make functions in JavaScript

// A function is a reusable block of code that performs a specific task.
// Functions can take inputs (called parameters) and can return outputs.

function avg(a, b) {
    return (a + b) / 2;
}

c = avg(4, 6)

console.log(c) // This will print 5, which is the average of 4 and 6.

// Functions can also be defined using function expressions or arrow functions.

// Function expression
const multiply = function (x, y) {
    return x * y;
};

// Arrow function
const square = (x) => x * x;

// diffrence between const function and function function is that const function is a function expression and it is stored in a variable, while function function is a function declaration.

// Function declarations are hoisted, which means they can be called before they are defined in the code.
// Function expressions, on the other hand, are not hoisted and cannot be called before they are defined.

// arrow function work same as lambda function but they have some differences. Arrow functions do not have their own 'this' context, which means they inherit 'this' from the parent scope. This can lead to different behavior when using 'this' inside an arrow function compared to a regular function. Additionally, arrow functions cannot be used as constructors and do not have a 'prototype' property.