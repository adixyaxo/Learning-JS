/*
Interfaces and object shapes
An object type describes the shape of data that a value must follow.
The `readonly` modifier prevents accidental changes, `?` makes a property optional,
and `&` and `|` combine or allow different type shapes.
Real web use: product objects, API responses, and user profiles.
*/

// This type alias describes the structure of a chai order object.
type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// This function accepts an inline object type with specific properties.
function makeChai(order: { type: string; sugar: number; strong: number }) {
  console.log(order);
}

// This function accepts the reusable type alias we defined earlier.
function serveChai(order: ChaiOrder) {
  console.log(order);
}

// A type alias can also describe the required ingredients for a recipe.
type TeaRecipe = {
  water: number;
  milk: number;
};

// A class can implement an object-like structure when it follows the same members.
class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// A class can implement an interface, which is a named contract for an object shape.
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// A union type allows a value to be one of several literal values.
type TeaType = "masala" | "ginger" | "lemon";

// This function accepts only the allowed tea types.
function orderChai(t: TeaType) {
  console.log(t);
}

// Intersection types combine multiple object shapes into one.
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type ExtraMasalaChai = BaseChai & Extra;

// This object satisfies both the base and extra properties.
const cup: ExtraMasalaChai = {
  teaLeaves: 2,
  masala: 10,
};

// `readonly` prevents the property from being changed after initialization.
// `?` makes the property optional.
type User = {
  readonly username: string;
  bio?: string;
};

const u1: User = { username: "Hitesh" };
// The following line would cause an error because username is readonly.
// u1.username = "name";
const u2: User = { username: "Hitesh", bio: "hitesh.ai" };