/*
Objects and nested data structures
Objects are a core part of JavaScript and TypeScript.
We can describe each property with a type so the structure stays predictable.
This is useful for forms, carts, and API data.
Real web use: a shopping cart item or a blog post object.
*/

// This is a plain JavaScript object with inferred types.
const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// This variable is declared with an inline object type.
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

// The object must match the declared shape exactly.
tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

// A type alias can describe an object with nested data like an array of strings.
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "AdrakChai",
  price: 25,
  ingredients: ["ginger", "chaipatti"],
};

// A simple object type can be reused for different values.
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

// This example shows a nested object structure with arrays and other objects.
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type order = {
  id: string;
  items: Item[];
  address: Address;
};

// Another object type used for a chai product.
type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

// Partial<T> makes every property optional, which helps with update objects.
const updateChai = (updates: Partial<chai>) => {
  console.log(updates);
};

updateChai({ name: "Ginger Chai", isHot: false });
updateChai({ price: 30 });
// An empty object is allowed because all properties are optional.
updateChai({});

// Required<T> does the opposite of Partial<T>; it makes all properties mandatory.
type chaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<chaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Aditya",
  quantity: 10,
});

// Pick<T, K> creates a new type using only selected properties.
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: number;
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "name",
  price: 10,
};

// Omit<T, K> removes specific properties from a type.
type publicChai = Omit<Chai, "ingredients">;

const privateChaiInfo: publicChai = {
  name: "name",
  // This property is intentionally excluded because it is omitted from the type.
  price: 10,
  isHot: true,
};