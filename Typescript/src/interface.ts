/*
Interfaces and object shapes
- An object type describes the shape of data.
- `readonly` protects values from accidental changes.
- `?` makes a property optional.
- `&` combines types, and `|` allows multiple possible shapes.
Real web use: product objects, API responses, and user profiles.
*/

type ChaiOrder = {
  type:string
  sugar:number
  strong:boolean
}

function makeChai(order:{type:string, sugar:number, strong:number}) {
  console.log(order)
}

function serveChai(order:ChaiOrder) {
  console.log(order)
}


type TeaRecipe = {
  water:number
  milk:number
}

class MasalaChai implements TeaRecipe{
  water = 100
  milk = 50
}

// type CupSize =  "small" | "large" this would give error because
// A class can only implement an object type or intersection of object types with statically known members.

interface CupSize {
  size : "small"|"large"
}

class Chai implements CupSize {
  size: "small"|"large" = "large"
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//   ok:boolean = true
// }
// A class can only implement an object type or intersection of object types with statically known members.


type TeaType = "masala" | "ginger" | "lemon"

function orderChai (t:TeaType)
{
  console.log(t)
}

type BaseChai = {teaLeaves : number}
type Extra = {masala :number}

type ExtraMasalaChai = BaseChai & Extra

const cup : ExtraMasalaChai = {
  teaLeaves : 2,
  masala : 10
}

type User = {
  readonly username : string
  bio?:string
}

const u1 : User = {username : "Hitesh"}
// cant do
// u1.username = "name"
const u2 : User = {username: "Hitesh", bio:"hitesh.ai"}