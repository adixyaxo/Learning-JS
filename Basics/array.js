// arrays

const my_arr = [1,2,3,4,5,true,"hello",NaN,null]
my_arr.push(10)
my_arr.unshift(99)
my_arr.pop()
my_arr.includes(4)
my_arr.includes(100)
my_arr.indexOf(4)
my_arr.indexOf(100)
my_arr.reverse()
my_arr.sort()
my_arr.splice(2, 1) // removes 1 element at index 2
my_arr.slice(2, 4) // returns a new array with elements from index 2 to 4 (not including 4)
my_arr.join(", ") // returns a string with all elements joined by ", "
my_arr.concat([6,7,8]) // returns a new array with elements from my_arr and the new array
my_arr.filter((item) => item > 3) // returns a new array with elements greater than 3
second_array = [1,2,3,4,5]
const new_array = [...my_arr, ...second_array] // returns a new array with elements from my_arr and second_array
//... does is called the spread operator, it spreads the elements of an array into a new array

let arrays_inside_array = [[1,2,[1,3,4]],[4,5,6],[7,8,9]]
const array_flatted = arrays_inside_array.flat() // flattens the array to a single level
const array_second_flatted = arrays_inside_array.flat(2) // flattens the array to a single level, but with depth of 2
const infinite_flatted = arrays_inside_array.flat(Infinity) // flattens the array to a single level, but with depth of Infinity

console.log(Array.isArray(my_arr)) // returns true if my_arr is an array
console.log(Array.isArray("hello")) // returns false if "hello" is not an array
console.log(my_arr.length) // returns the length of the array
console.log(Array.from("hello")) // returns an array from a string
console.log(Array.from({name: "John", age: 30})) // returns nothing because the object is not iterable
