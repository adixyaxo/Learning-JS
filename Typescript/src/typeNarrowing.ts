/*
Type narrowing
Narrowing means reducing a broad type to a more specific one.
This is very useful after checks such as `typeof`, truthy checks, and `switch` cases.
It helps us write safer code without repeating unnecessary checks.
Real web use: checking whether user input is a string, number, or null before processing it.
*/

// The parameter can be either a string or a number, so we narrow it inside the function.
function chai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} Chai...`;
  }
  return `Chai order ${kind}`;
}

// An optional string is checked for truthiness before using it.
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving Normal Chai`;
}

// This function shows an exhaustive check with several string literal cases.
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "small chai";
  } else if (size === "medium") {
    return "medium chai";
  } else if (size === "large") {
    return "large chai";
  }
  return `chai order #${size}`;
}