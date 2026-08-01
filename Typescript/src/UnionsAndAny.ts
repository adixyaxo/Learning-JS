/*
Unions, any, unknown, and never
A union type lets a value be one of several types.
`any` is flexible but unsafe, so it should be avoided when possible.
`unknown` is safer because we must check it before using it.
`never` means a function should never return normally.
Real web use: handling API states, form values, and error paths in production apps.
*/

// A union type can hold either a number or a string.
let subs: number | string = 10;
subs = "1M";

// A string literal union restricts values to a small set of allowed strings.
let status: "Not Done" | "Doing" | "Done" = "Not Done";
status = "Doing";

// `any` disables type checking and can make code less safe.
let orders = ["12", "11", "10", "9"];
let currentorder; // This is inferred as any because it is not initialized.

let anyData: any = 10;
anyData = "string";

for (let order of orders) {
  if (order == "12") {
    currentorder = order;
    break;
  }
}