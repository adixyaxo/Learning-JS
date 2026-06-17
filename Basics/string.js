let str1 = 'string'
let str2 = " bring"

console.log(str1+str2)

// or
let str = str1+str2
console.log(str)

// YE SAB UPAR JAISE STRING ADD KRI HAI YE SAB NOOBS KRTE HAIN SIGMAS NEECHE WALA MEATHROD FOLLOW KRTE HAIN

// STRING INTERPOLATION or MANIPULATION
console.log(`str is ${str1} and string 2 is ${str2}`)
// note kro ki ` ye wala use kra hai na ki ' ye wala


let name = new String(str)
// this is also a string but it is easy to access the meathods of string this way

console.table([typeof str,typeof name])
console.log(str==name)
console.log(str===name)


let name_modifier = new String(name)
name_modifier = new String("new string")

console.table([str,name,name_modifier])

// this means even though both are objs pointing to memory when we assign one to each other they dont point to the same memory instead there is some copying operation taking place inside there
// This is a classic JavaScript trap. Both look like strings, but one is a primitive value and the other is a String object.