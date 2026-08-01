/*
Objects and nested data structures
- Objects are a core part of JavaScript and TypeScript.
- We can describe each property clearly with a type.
- This makes it easier to work with forms, carts, and API data.
Real web use: a shopping cart item or a blog post object.
*/

const chai = {
  name: "Masala Chai",
  price: 20,
  isHot : true
}

// declaring object types

let tea:{
  name  : string
  price : number
  isHot : boolean
}

tea = {
  name:"Ginger Tea",
  price : 25,
  isHot : true
}

type Tea = {
  name       : string
  price      : number
  ingredients: string[]
}

const adrakChai: Tea = {
  name:"AdrakChai",
  price: 25,
  ingredients: ["ginger", "Chaipatti"]
}

type Cup = {size: string}
let smallCup : Cup = {size: "200ml"}
let bigCup = {size: "500ml", material :"steel"}
smallCup = bigCup


type Item =  {name:string,quantity:number}
type Address = {street:string, pin:number}

type order = {
  id:string
  items:Item[]
  address:Address
}

type chai = {
  name:string
  price:number
  isHot:boolean
}

// Make all properties optional
const updateChai = (updates:Partial<chai>)=>{
  console.log(updates)
}

updateChai({name:"Ginger Chai",isHot:false})
updateChai({price:30})
updateChai({}) // This is valid because all properties are optional but if we pass a property that is not in chai type then it will give error also passing an empty object is not a good practice because it will not update anything and will just log an empty object.

type chaiOrder = {
  name?: string
  quantity?:number
}

const placeOrder = (order:Required<chaiOrder>) => {
  console.log(order)
}

placeOrder({
  name:"Aditya",
  quantity : 10
})

type Chai = {
  name:string
  price:number
  isHot:boolean
  ingredients:number
}

type BasicChaiInfo = Pick<Chai,"name" | "price">

const chaiInfo : BasicChaiInfo = {
  name:"name",
  price: 10,
}

type publicChai = Omit<Chai, "ingredients" >

const privateChaiInfo : publicChai = {
  name:"name",
  // ingredients: 10, Object literal may only specify known properties, and 'ingredients' does not exist in type 'publicChai'.
  price:10,
  isHot:true
}