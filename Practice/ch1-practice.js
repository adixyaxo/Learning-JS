let str = "This is a string"
let str_mod = str + 11
console.log(str_mod)
console.log(typeof str)

const obj = {
  name : "Halwai Wala",
  age : 19
}


// obj = {} this will give an error as the obj is const but the variables stored inside object are not const

obj.name = "balwai wala" // we can do this
obj["Lambu"] = "balwai wala" // we can do this
obj.balwan = "balwan"
console.log(obj)