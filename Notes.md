# JavaScript — Notes & Cheatsheet for C/C++/Python Developers

> You already know variables, loops, functions, recursion, OOP, and data structures.
> This doc covers **only what's different or unique to JS**. C++ comparisons are inline.

---

## Table of Contents

1. [Types & Quirks](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#1-types--quirks)
2. [Variables — let, const, var](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#2-variables--let-const-var)
3. [Objects & Arrays](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#3-objects--arrays)
4. [Functions (Critical)](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#4-functions-critical)
5. [Closures](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#5-closures)
6. [this Keyword](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#6-this-keyword)
7. [ES6+ Modern Syntax](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#7-es6-modern-syntax)
8. [Async JavaScript — The Big One](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#8-async-javascript--the-big-one)
9. [DOM & Browser APIs](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#9-dom--browser-apis)
10. [Prototypes & Classes](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#10-prototypes--classes)
11. [Modules](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#11-modules)
12. [Error Handling](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#12-error-handling)
13. [Node.js & npm Basics](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#13-nodejs--npm-basics)
14. [Advanced Topics (Reference)](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#14-advanced-topics-reference)
15. [Quick Cheatsheet](https://claude.ai/chat/97fb73ad-6af3-4fee-bab5-2d3fa23b1a5d#15-quick-cheatsheet)

---

## 1. Types & Quirks

### Primitive Types

```js
typeof 42          // "number"   (no int/float split — all IEEE 754 double)
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"   ← famous bug, null is NOT an object
typeof {}          // "object"
typeof []          // "object"   ← arrays are objects!
typeof function(){} // "function"
```

### `undefined` vs `null`


| `undefined`                        | `null`                       |
| ---------------------------------- | ---------------------------- |
| Variable declared but not assigned | Explicitly set to "no value" |
| JS sets this automatically         | You set this on purpose      |
| `let x;`→ x is undefined          | `let x = null;`              |

```js
let x;
console.log(x);        // undefined
console.log(x === null); // false
```

### Truthy & Falsy

**Falsy values** (everything else is truthy):

```
false, 0, -0, 0n, "", '', ``, null, undefined, NaN
```

```js
if ("") {}     // won't run — empty string is falsy
if ("hello") {} // will run — non-empty string is truthy
if (0) {}       // won't run
if ([]) {}      // WILL run — empty array is truthy!
if ({}) {}      // WILL run — empty object is truthy!
```

> **C++ comparison:** In C++, `0` is false and anything else is true. JS has more falsy values to remember.

### `==` vs `===`

**Always use `===`** (strict equality — no type coercion).

```js
0 == "0"    // true  ← type coercion happened, BAD
0 === "0"   // false ← strict, GOOD

null == undefined   // true
null === undefined  // false
```

### Type Coercion Traps

```js
"5" + 3     // "53"  ← + prefers string concatenation
"5" - 3     // 2     ← - forces number conversion
"5" * "2"   // 10
true + 1    // 2
[] + []     // ""
[] + {}     // "[object Object]"
```

---

## 2. Variables — `let`, `const`, `var`

> **Never use `var`.** Use `let` and `const` always.


|              | `let`    | `const`  | `var`(avoid)                  |
| ------------ | -------- | -------- | ----------------------------- |
| Reassignable | ✅       | ❌       | ✅                            |
| Block scoped | ✅       | ✅       | ❌ (function scoped)          |
| Hoisted      | ✅ (TDZ) | ✅ (TDZ) | ✅ (initialized to undefined) |

### Temporal Dead Zone (TDZ)

```js
console.log(x);  // ReferenceError — TDZ!
let x = 5;
```

With `var` this would print `undefined` instead of throwing — confusing and error-prone. That's why `var` is avoided.

### `const` doesn't mean immutable

```js
const arr = [1, 2, 3];
arr.push(4);       // OK — mutating the object is allowed
arr = [5, 6];      // TypeError — reassignment is not allowed
```

---

## 3. Objects & Arrays

### Object Literals

```js
// C++ struct equivalent but dynamic
const user = {
    name: "Aditya",
    age: 19,
    greet() {                    // method shorthand
        console.log("Hi!");
    }
};

user.name          // "Aditya"
user["name"]       // "Aditya" — bracket notation for dynamic keys
user.email = "x@x.com";  // add new property anytime
delete user.age;           // delete property
```

### Checking Key Existence

```js
"name" in user         // true
user.hasOwnProperty("name")  // true
user.unknown           // undefined (not an error!)
```

### Shallow vs Deep Copy

```js
const a = { x: 1 };
const b = a;              // reference copy — b and a point to same object
b.x = 99;
console.log(a.x);         // 99 — a was mutated!

const c = { ...a };       // shallow copy via spread
const d = Object.assign({}, a);  // also shallow copy

// Deep copy (simple cases):
const e = JSON.parse(JSON.stringify(a));  // works for plain data, not functions
```

### Object Utility Methods

```js
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj)    // ["a", "b", "c"]
Object.values(obj)  // [1, 2, 3]
Object.entries(obj) // [["a", 1], ["b", 2], ["c", 3]]
```

### Array Methods (the important ones)

```js
const nums = [1, 2, 3, 4, 5];

// map — transform each element, returns new array
nums.map(n => n * 2)           // [2, 4, 6, 8, 10]

// filter — keep elements matching condition
nums.filter(n => n % 2 === 0)  // [2, 4]

// reduce — fold to single value
nums.reduce((acc, n) => acc + n, 0)  // 15

// find — first match (or undefined)
nums.find(n => n > 3)          // 4

// some / every — boolean checks
nums.some(n => n > 4)          // true
nums.every(n => n > 0)         // true

// sort — mutates! sorts lexicographically by default
[10, 2, 1].sort()              // [1, 10, 2] ← WRONG for numbers!
[10, 2, 1].sort((a, b) => a - b)  // [1, 2, 10] ← correct
```

---

## 4. Functions (Critical)

### Three Ways to Define Functions

```js
// 1. Function Declaration — hoisted to top of scope
function add(a, b) {
    return a + b;
}

// 2. Function Expression — NOT hoisted
const add = function(a, b) {
    return a + b;
};

// 3. Arrow Function — concise, different `this` behavior
const add = (a, b) => a + b;

// Arrow with body:
const add = (a, b) => {
    const result = a + b;
    return result;
};

// Single param — parens optional:
const double = n => n * 2;
```

### Higher-Order Functions

Functions that take or return other functions:

```js
function applyTwice(fn, x) {
    return fn(fn(x));
}
applyTwice(n => n + 1, 5)  // 7
```

> **C++ comparison:** Like function pointers or `std::function`, but much cleaner syntax.

---

## 5. Closures

One of the most important JS concepts. A function that "remembers" variables from its outer scope even after the outer function has returned.

```js
function makeCounter() {
    let count = 0;           // count lives in makeCounter's scope
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
counter()  // 1
counter()  // 2
counter()  // 3
// count is private — can't access it from outside!
```

### Why closures matter

* **Data privacy** — encapsulate state without classes
* **Factories** — create specialized functions
* **Callbacks** — remember context

```js
// Factory example
function multiplier(factor) {
    return n => n * factor;   // closes over `factor`
}
const triple = multiplier(3);
triple(5)  // 15
triple(10) // 30
```

> **C++ comparison:** Similar to lambdas capturing variables `[factor](int n){ return n * factor; }` but JS closures are more pervasive.

---

## 6. `this` Keyword

`this` is the most confusing part of JS. Unlike C++ where `this` always points to the current object, in JS `this` depends on **how the function is called**.

### `this` in different contexts

```js
// 1. Global context
console.log(this)  // window (browser) / {} (Node.js strict mode)

// 2. Object method — this = the object
const obj = {
    name: "Aditya",
    greet() {
        console.log(this.name);  // "Aditya"
    }
};
obj.greet();

// 3. Arrow function — this = inherited from OUTER scope (lexical this)
const obj2 = {
    name: "Aditya",
    greet: () => {
        console.log(this.name);  // undefined! Arrow doesn't have own `this`
    }
};

// 4. Losing this — common bug
const fn = obj.greet;
fn();   // this is now global, not obj!
```

### `call`, `apply`, `bind` — explicitly set `this`

```js
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const user = { name: "Aditya" };

greet.call(user, "Hello");          // Hello, Aditya
greet.apply(user, ["Hello"]);       // Hello, Aditya  (args as array)
const boundGreet = greet.bind(user); // returns new function with this fixed
boundGreet("Hi");                   // Hi, Aditya
```

**Rule of thumb:** Use arrow functions in callbacks to avoid `this` confusion.

---

## 7. ES6+ Modern Syntax

### Destructuring

```js
// Object destructuring
const { name, age } = user;
const { name: userName } = user;  // rename

// With defaults
const { name = "Anonymous" } = user;

// Array destructuring
const [first, second] = [10, 20, 30];
const [, , third] = [10, 20, 30];   // skip elements
const [head, ...tail] = [1, 2, 3, 4];  // rest
```

### Spread Operator

```js
// Arrays
const a = [1, 2, 3];
const b = [...a, 4, 5];       // [1, 2, 3, 4, 5]

// Objects
const base = { x: 1, y: 2 };
const extended = { ...base, z: 3 };  // { x: 1, y: 2, z: 3 }

// Function args
Math.max(...[1, 5, 3])        // 5
```

### Rest Parameters

```js
function sum(...nums) {    // nums is an array
    return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4)  // 10
```

### Template Literals

```js
const name = "Aditya";
const msg = `Hello, ${name}! You are ${2026 - 2005} years old.`;

// Multiline
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
```

### Optional Chaining `?.`

```js
const user = { address: { city: "Karnal" } };

user?.address?.city         // "Karnal"
user?.phone?.number         // undefined (no error!)
user?.greet?.()             // calls greet() if it exists
arr?.[0]                    // safe array access
```

### Nullish Coalescing `??`

```js
// Returns right side only if left is null or undefined
const name = user.name ?? "Anonymous";

// vs || which also catches 0, "", false:
const count = 0 || 10;   // 10  ← probably wrong
const count = 0 ?? 10;   // 0   ← correct
```

### Short-circuit Assignment

```js
x ||= y   // x = x || y
x &&= y   // x = x && y
x ??= y   // x = x ?? y
```

---

## 8. Async JavaScript — The Big One

### The Event Loop (Concept)

JS is **single-threaded** but handles async via the event loop:

```
Call Stack → Web APIs (setTimeout, fetch) → Callback/Microtask Queue → back to Call Stack
```

Order of execution priority:

1. **Synchronous code** (call stack)
2. **Microtasks** (Promise `.then`, `async/await`)
3. **Macrotasks** (setTimeout, setInterval, I/O)

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Microtask (Promise) runs before macrotask (setTimeout)
```

### Callbacks (Old Way)

```js
setTimeout(() => {
    console.log("done after 1 second");
}, 1000);

// Callback hell — nested mess:
fetchUser(id, (user) => {
    fetchPosts(user.id, (posts) => {
        fetchComments(posts[0].id, (comments) => {
            // ...
        });
    });
});
```

### Promises

```js
// Creating a Promise
const p = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("data");
    else reject(new Error("failed"));
});

// Consuming
p
  .then(data => console.log(data))    // "data"
  .catch(err => console.error(err))
  .finally(() => console.log("done"));

// Chaining
fetch("/api/user")
    .then(res => res.json())          // returns another Promise
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

### Async/Await (Modern Way — Preferred)

```js
async function getUser(id) {
    try {
        const res = await fetch(`/api/users/${id}`);  // waits here
        const user = await res.json();
        return user;
    } catch (err) {
        console.error("Failed:", err);
    }
}

// async functions always return a Promise
getUser(1).then(user => console.log(user));

// Or use in another async function:
async function main() {
    const user = await getUser(1);
    console.log(user);
}
```

### Promise Utilities

```js
// Run in parallel, wait for ALL
const [user, posts] = await Promise.all([
    fetchUser(id),
    fetchPosts(id)
]);

// Run in parallel, get ALL results (even failed ones)
const results = await Promise.allSettled([p1, p2, p3]);
results.forEach(r => {
    if (r.status === "fulfilled") console.log(r.value);
    else console.log(r.reason);
});

// First to resolve wins
const fastest = await Promise.race([p1, p2]);

// First to RESOLVE wins (ignores rejections)
const first = await Promise.any([p1, p2]);
```

> **C++ comparison:** Similar to `std::future`/`std::promise` but much more ergonomic. `async/await` is the cleanest pattern — prefer it.

---

## 9. DOM & Browser APIs

### Selecting Elements

```js
document.getElementById("main")
document.querySelector(".card")          // first match (CSS selector)
document.querySelectorAll(".card")       // NodeList of all matches
```

### Modifying Elements

```js
const el = document.querySelector("#title");
el.textContent = "New Title";           // text only
el.innerHTML = "<b>Bold</b>";          // HTML (careful with XSS)
el.style.color = "red";
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("visible");
el.setAttribute("data-id", 42);
```

### Creating Elements

```js
const div = document.createElement("div");
div.textContent = "Hello";
div.classList.add("card");
document.body.appendChild(div);
```

### Events

```js
const btn = document.querySelector("#btn");

// Add listener
btn.addEventListener("click", (event) => {
    console.log(event.target);   // element that was clicked
    event.preventDefault();       // stop default behavior (form submit, link)
    event.stopPropagation();      // stop bubbling up
});

// Event Delegation — handle events from parent for dynamic children
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.matches(".item")) {
        console.log("Item clicked:", e.target.textContent);
    }
});
```

### Event Bubbling & Capturing

```
Capture phase: window → document → body → target
Bubble phase:  target → body → document → window
```

Default is bubbling. To use capturing: `addEventListener("click", fn, true)`.

### Local Storage

```js
localStorage.setItem("key", "value");
localStorage.setItem("user", JSON.stringify({ name: "Aditya" }));  // store objects

localStorage.getItem("key");                    // "value"
JSON.parse(localStorage.getItem("user"));       // { name: "Aditya" }

localStorage.removeItem("key");
localStorage.clear();
```

---

## 10. Prototypes & Classes

### The Prototype Chain

Every JS object has an internal `[[Prototype]]` link. Property lookup walks the chain.

```js
const arr = [1, 2, 3];
// arr → Array.prototype → Object.prototype → null
// arr.push comes from Array.prototype.push
```

```js
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

const p = new Person("Aditya");
p.greet();  // "Hi, I'm Aditya"
```

### ES6 Classes (Syntactic Sugar Over Prototypes)

```js
class Animal {
    #sound;  // private field (ES2022)

    constructor(name) {
        this.name = name;
        this.#sound = "...";
    }

    speak() {
        console.log(`${this.name} says ${this.#sound}`);
    }

    static create(name) {  // static method
        return new Animal(name);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);         // must call super first
        this.#sound = "woof"; // Error! can't access parent's private field
    }

    speak() {
        console.log(`${this.name} barks!`);
    }
}

const d = new Dog("Rex");
d.speak();              // "Rex barks!"
d instanceof Dog        // true
d instanceof Animal     // true
```

> **C++ comparison:** JS classes don't have true private until `#field` syntax (ES2022). Under the hood it's still prototype-based — no vtables, no virtual dispatch overhead.

---

## 11. Modules

### ES Modules (`.mjs` or with `"type": "module"` in package.json)

```js
// math.js — exporting
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator {}  // default export (one per file)

// main.js — importing
import Calculator, { PI, add } from "./math.js";
import * as math from "./math.js";  // namespace import
math.PI, math.add(1, 2)

// Dynamic import (lazy loading)
const module = await import("./math.js");
```

---

## 12. Error Handling

```js
// Synchronous
try {
    JSON.parse("invalid json");
} catch (err) {
    console.error(err.name);     // SyntaxError
    console.error(err.message);
    console.error(err.stack);
} finally {
    // always runs
}

// Custom errors
class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

throw new NetworkError("Not found", 404);

// Async errors — use try/catch with await
async function fetchData() {
    try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new NetworkError("Failed", res.status);
        return await res.json();
    } catch (err) {
        if (err instanceof NetworkError) { /* handle */ }
        else throw err;  // re-throw unknown errors
    }
}
```

---

## 13. Node.js & npm Basics

### Running JS

```bash
node script.js
node                  # REPL
```

### Core Modules

```js
// File system
const fs = require("fs");                    // CommonJS (older)
import { readFile } from "fs/promises";      // ESM (modern)

await readFile("file.txt", "utf8");          // returns string
fs.readFileSync("file.txt", "utf8");        // sync version

// Path
import path from "path";
path.join("/home", "aditya", "file.txt")    // "/home/aditya/file.txt"
path.basename("/home/aditya/file.txt")      // "file.txt"
path.extname("file.txt")                    // ".txt"
path.dirname("/home/aditya/file.txt")       // "/home/aditya"

// Process
process.argv         // command line arguments
process.env          // environment variables
process.cwd()        // current working directory
process.exit(0)      // exit
```

### npm

```bash
npm init -y                   # create package.json
npm install express           # install + add to dependencies
npm install -D typescript     # dev dependency
npm install -g nodemon        # global install
npm run start                 # run script from package.json
npx create-react-app myapp    # run without installing
```

### package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

**Semantic versioning:**`^4.18.0` = compatible with 4.x.x, `~4.18.0` = 4.18.x only.

---

## 14. Advanced Topics (Reference)

### Maps and Sets

```js
// Map — like std::unordered_map but any key type
const map = new Map();
map.set("key", "value");
map.set(42, "number key");
map.set({}, "object key");   // objects as keys!
map.get("key");
map.has("key");
map.size;
for (const [k, v] of map) {}

// Set — like std::unordered_set
const set = new Set([1, 2, 2, 3]);  // {1, 2, 3}
set.add(4);
set.has(2);    // true
set.size;      // 4
// Remove duplicates from array:
[...new Set([1, 1, 2, 3])]  // [1, 2, 3]
```

### Generators

```js
function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}

for (const n of range(0, 5)) {
    console.log(n);  // 0, 1, 2, 3, 4
}

const gen = range(0, 3);
gen.next()  // { value: 0, done: false }
gen.next()  // { value: 1, done: false }
```

### Symbols

```js
const id = Symbol("id");       // unique identifier
const id2 = Symbol("id");
id === id2                     // false — always unique!
obj[id] = 123;                 // hidden from for..in, JSON.stringify
Symbol.for("shared")           // global registry — same key = same symbol
```

### Proxy

```js
const handler = {
    get(target, prop) {
        return prop in target ? target[prop] : `No property ${prop}`;
    },
    set(target, prop, value) {
        if (typeof value !== "number") throw TypeError("Must be number");
        target[prop] = value;
        return true;
    }
};
const proxy = new Proxy({}, handler);
proxy.x = 5;      // OK
proxy.x = "hi";   // TypeError
proxy.y           // "No property y"
```

### WeakMap / WeakSet

Like Map/Set but keys must be objects and are held **weakly** — don't prevent garbage collection. Useful for caching without memory leaks.

---

## 15. Quick Cheatsheet

```js
// ─── TYPES ────────────────────────────────────────────────
typeof null === "object"    // bug — null is not an object
NaN !== NaN                 // NaN is the only value not equal to itself
Number.isNaN(NaN)           // true (safe check)
Number.isFinite(Infinity)   // false

// ─── EQUALITY ─────────────────────────────────────────────
===  // always use this
!==  // always use this
==   // avoid
!=   // avoid

// ─── VARIABLES ────────────────────────────────────────────
const x = 5;         // prefer const
let y = 10;          // use let if reassignment needed
// var — never use

// ─── FUNCTIONS ────────────────────────────────────────────
const fn = (a, b = 0) => a + b;  // default param
const fn = (...args) => args;     // rest param → array

// ─── OBJECTS ──────────────────────────────────────────────
const {a, b} = obj;         // destructure
const copy = {...obj};       // shallow copy
const merged = {...a, ...b}; // merge objects

// ─── ARRAYS ───────────────────────────────────────────────
arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((acc, x) => acc + x, 0)
arr.find(x => x > 5)
arr.some(x => x > 5)
arr.every(x => x > 0)
[...arr]                    // copy array
[...arr1, ...arr2]          // concat

// ─── ASYNC ────────────────────────────────────────────────
const data = await fetch(url).then(r => r.json());  // one-liner
await Promise.all([p1, p2])    // parallel, all must succeed
await Promise.allSettled([...]) // parallel, get all results

// ─── NULLISH / OPTIONAL ───────────────────────────────────
x ?? y         // y only if x is null/undefined
x?.y?.z        // safe property access
x ??= defaultValue  // assign if null/undefined

// ─── USEFUL PATTERNS ──────────────────────────────────────
// Deep clone (simple data)
JSON.parse(JSON.stringify(obj))

// Remove duplicates
[...new Set(arr)]

// Object from entries
Object.fromEntries([["a", 1], ["b", 2]])  // {a: 1, b: 2}

// Group by (ES2024)
Object.groupBy(arr, item => item.category)

// Swap variables
[a, b] = [b, a];

// Check if array
Array.isArray([])  // true

// Flatten
[1, [2, [3]]].flat()       // [1, 2, [3]]
[1, [2, [3]]].flat(Infinity) // [1, 2, 3]

// ─── STRING METHODS ───────────────────────────────────────
"hello".includes("ell")     // true
"hello".startsWith("he")    // true
"ha".repeat(3)              // "hahaha"
"  hi  ".trim()             // "hi"
"a,b,c".split(",")          // ["a", "b", "c"]
[1,2,3].join(" - ")         // "1 - 2 - 3"
"hello".at(-1)              // "o" (negative index!)
```

---

## Suggested Learning Order

```
Week 1:  Types + Variables + Objects + Arrays + Functions + Closures
Week 2:  this + ES6+ syntax + Async (Event loop, Promises, async/await)
Week 3:  DOM/Browser + Prototypes/Classes + Modules + Node.js + npm
After:   TypeScript → React → Express.js
```

**Most important to internalize:**

* Closures (data privacy, factories, callbacks)
* `this` (and why arrow functions don't have their own `this`)
* The event loop (why `setTimeout(fn, 0)` runs after Promises)
* `async/await` patterns
* Prototype chain (even if you only use class syntax)
