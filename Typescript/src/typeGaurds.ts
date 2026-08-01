/*
Type guards and discriminated unions
Type guards help TypeScript narrow a value to a safer type.
`instanceof` checks class instances, and custom guards let us validate object shapes.
A discriminated union uses a shared property such as `type` to decide the correct shape.
Real web use: handling different API response formats or order types in a dashboard.
*/

// These two classes represent different chai serving styles.
class Kulladh {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving Cutting Chai`;
  }
}

// The `instanceof` check tells TypeScript which class the value belongs to.
function serve(chai: Kulladh | Cutting) {
  if (chai instanceof Kulladh) {
    return chai.serve();
  }

  if (chai instanceof Cutting) {
    return chai.serve();
  }
}

// This object type is used as a custom type guard target.
type ChaiOrder = {
  type: string;
  sugar: number;
};

// A custom type guard checks that an unknown value really looks like a `ChaiOrder`.
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

// Once the guard passes, TypeScript knows the value is a `ChaiOrder`.
function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`;
  }
  return `Serving Custom Chai ${item}`;
}

// A discriminated union uses a shared literal property to distinguish variants.
type MasalaChai = { type: "Masala"; spicelevel: number };
type GingerChai = { type: "Ginger"; gingerlevel: number };
type ElaichiChai = { type: "Elaichi"; elichilevel: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

// The `switch` uses the shared `type` field to handle each case safely.
function MakeChai(order: Chai) {
  switch (order.type) {
    case "Masala":
      return `Masala Chai banri hai ladle`;

    case "Elaichi":
      return `Elaichi banawe che`;

    case "Ginger":
      return `Adrak wali chai banri hai ladle`;
  }
}