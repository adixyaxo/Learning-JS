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
