# TypeScript Learning Notes

## 1. What TypeScript is
- TypeScript is JavaScript with types.
- It helps us catch mistakes before the app runs.
- It makes code easier to read and safer to maintain.
- In real web projects, it is very useful for dashboards, e-commerce apps, and forms.

## 2. Why TypeScript matters in real web development
- A login form can be typed so email and password must follow expected shapes.
- An API response can be checked before the UI uses it.
- A shopping cart can be typed so price, quantity, and product name stay correct.

## 3. Core idea: types
- A type tells us what kind of value a variable should hold.
- Example: `string`, `number`, `boolean`.
- This gives us confidence while writing code.

```text
JavaScript values -> can be anything
TypeScript values -> follow a clear shape
```

## 4. Basic annotations
- We can write types directly.
- Example: `let name: string = "Aditi"`.
- This is helpful when we want the intent to be very clear.

### Real-world use
- A user profile name should be a string.
- A product price should be a number.

## 5. Type inference
- TypeScript can often guess the type for us.
- Example: `let drink = "chai"` becomes a string automatically.
- This saves time while keeping safety.

```text
let drink = "chai"
// TypeScript infers: string
```

## 6. Object types
- Objects are a big part of web apps.
- We can define exactly what keys and value types an object should have.

```ts
type Tea = {
  name: string
  price: number
  isHot: boolean
}
```

### Real-world use
- A product card
- A user profile
- A blog post

## 7. Interfaces
- Interfaces describe object shapes in a clean way.
- They are commonly used in React and API-related code.

```ts
interface User {
  username: string
  bio?: string
}
```

### Important idea
- `?` means the property is optional.
- `readonly` means the property cannot be changed later.

## 8. Union types
- A union allows a value to be one of several types.
- Example: `string | number`.
- This is useful when a value can come in different forms.

```ts
let value: string | number = "hello"
```

### Real-world use
- A search box may take a string or a number.
- An API response may be success or error.

## 9. Any vs Unknown
- `any` is flexible but unsafe.
- `unknown` is safer because we must check it first.

```text
any -> trust everything
unknown -> ask before using
```

### Real-world use
- When fetching data from an API, `unknown` helps avoid bugs.

## 10. Type narrowing
- Narrowing means narrowing down a broad type to a more specific one.
- We use checks like `typeof`, `instanceof`, and `switch`.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  }
}
```

### Real-world use
- A form field may contain text or a number.
- A component may receive different item types.

## 11. Type guards
- Type guards protect us when a value could have multiple shapes.
- Custom guards are useful for object checks.

```ts
function isUser(value: unknown): value is User {
  return typeof value === "object" && value != null
}
```

### Real-world use
- Validating API data before rendering it.

## 12. Discriminated unions
- A discriminated union uses one common property to identify the shape.
- Example: `type: "admin" | "user"`.

```ts
type UserAction =
  | { type: "login"; username: string }
  | { type: "logout" }
```

### Real-world use
- Reducers in React apps
- Event handling systems

## 13. Never type
- `never` means a function should never finish normally.
- It is useful for impossible states.

```ts
function crash(): never {
  throw new Error("Crash")
}
```

### Real-world use
- Error handlers
- Defensive code paths

## 14. Simple diagram of the TypeScript flow
```text
User input / API data
        ↓
TypeScript checks shape
        ↓
Safer code in app
        ↓
Better UI and fewer bugs
```

## 15. Simple diagram of type safety
```text
Value -> TypeScript checks it
   |              |
string         number
   |              |
allowed        allowed
```

## 16. Best habits to remember
- Prefer clear types over `any`.
- Use `unknown` when you are unsure.
- Use interfaces for objects.
- Use unions when a value can have multiple valid forms.
- Use type guards when working with mixed data.

## 17. Summary
- TypeScript makes code safer and easier to understand.
- It is very helpful in modern web development.
- Start small, use it in forms, APIs, and React props, then expand gradually.
