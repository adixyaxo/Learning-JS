// Stack(Primitive data-types)
// Heap(Non Primitive data-types)

// Stack me data jab bhi store hota hai toh data copy hota hai
let name = "Aditya Dagar"
let game = name
game = "halwa poori"
console.table([name, game])



// non Primitive data types work as pointers or refrences and work from heap
// heap me jab bhi data store hota hai toh uska refrence milta hai

let heap = { "name": "Aditya","age":19 }
let black = heap
black["name"] = "halwa poori"
//or
black.age = 20
console.log(typeof heap)
console.log(typeof black)

console.log(heap)
console.log(black)
