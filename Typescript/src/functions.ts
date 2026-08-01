// Here we are going to look at functions and how to use them in TypeScript.

function add(a: number, b: number): number {
  return a + b;
}

//void
function logMessage(message: string): void {
  console.log(message);
}

// complex data types
function processOrder(order: { type: string; quantity: number }): void {
  console.log(`Processing order for ${order.quantity} of ${order.type}`);
}

// optional parameters
function greetUser(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

// default parameters
function calculateTotal(price: number, taxRate: number = 0.1): number {
  return price + price * taxRate;
}

// rest parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// arrow functions
const multiply = (x: number, y: number): number => x * y;

