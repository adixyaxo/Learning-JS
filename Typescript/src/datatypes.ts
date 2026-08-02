// We would look at arrays tuples and enums in this file. Arrays are a collection of values of the same type. Tuples are a collection of values of different types. Enums are a way to define a set of named constants.

const chaiFlavors: string[] = ["Masala", "Ginger", "Elaichi"];
const chaiPrices: Array<number> = [20, 25, 30];

type Chai = {
  name:string
  price:number
}

let chaiArray : Chai[] = [
  {name:"Masala", price:20},
  {name:"Ginger", price:25},
  {name:"Elaichi", price:30}
]

// readonly array
const readonlyChaiFlavors: readonly string[] = ["Masala", "Ginger", "Elaichi"];
// readonlyChaiFlavors.push("Lemon");  Error: Property 'push' does not exist on type 'readonly string[]'.

const table:number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let tuple: [string, number] = ["Masala", 20];
tuple[0] = "Ginger"; // OK
tuple[1] = 25; // OK
// tuple[2] = "Elaichi"; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.

let userinfo: [string, number, boolean] = ["John", 30, true];

// named tuple
type UserInfo = [name: string, age: number, isAdmin: boolean];
let user: UserInfo = ["John", 30, true];

// ENUMS are a way to define a set of named constants. Enums can be numeric or string-based.
// used to restrict choice for user

enum ChaiFlavor {
  MASALA,
  GINGER,
  ELAICHI
}

let currentFlavor: ChaiFlavor = ChaiFlavor.MASALA;

enum Status {
  PENDING = 100,
  APPROVED = 200,
  REJECTED // will automatically be assigned the value 201
}

enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
  ELAICHI = "Elaichi"
}

function makeChai(type: ChaiType): void {
  console.log(`Making ${type} chai`);
}

makeChai(ChaiType.MASALA); // Making Masala chai
makeChai(ChaiType.GINGER); // Making Ginger chai
makeChai(ChaiType.ELAICHI); // Making Elaichi chai

// how are enums different from union and array types? Enums are a way to define a set of named constants. Union types are a way to define a type that can be one of several types. Array types are a way to define a collection of values of the same type.


// matlab ki enum constant define krne ke liye use hota hai same level ke values ko group krne ke liye use hota hai. Union types are used to define a type that can be one of several types. Array types are used to define a collection of values of the same type.

// unexpected tuple problem
let t:[string, number] = ["Masala", 20];
t.push("Ginger"); // This is allowed, but it can lead to unexpected behavior because the tuple is supposed to have a fixed length of 2. Now it has a length of 3.
