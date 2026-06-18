const score = 4000

const balance = new Number(10000)

console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(score.toString().length)
console.log(balance.toFixed(2))

const other = 213.3991
const value = 1312432423
console.log(other.toPrecision(4)) // iska matlab hai starting se right se pahli 4 values toPrecision calculate hongi agar kam rahi toh e aa jaega

console.log(value.toLocaleString())
console.log(value.toLocaleString('en-IN'))

console.log("-------------------------------")
// ------------------------------------------------------------------
console.log("-------------------------------")

// MATHS


console.log(Math.abs(-4)) // absolute value
console.log(Math.abs(4)) // absolute value
console.log(Math.round(4.6)) // round to nearest integer
console.log(Math.floor(4.6)) // round down
console.log(Math.ceil(4.6)) // round up
console.log(Math.sqrt(64)) // square root
console.log(Math.pow(2,3)) // 2 to the power of 3
console.log(Math.min(1,2,3,4,5)) // minimum value
console.log(Math.max(1,2,3,4,5)) // maximum value
console.log(Math.random()) // random number between 0 and 1
const min = 100
const max = 200
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random number between min and max