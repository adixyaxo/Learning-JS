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




// string meathods and what they do
// 1. length
console.log(str.length)

// 2. toUpperCase and toLowerCase
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// 3. indexOf
console.log(str.indexOf("bring"))

// 4. slice
console.log(str.slice(0,6))

// 5. replace
console.log(str.replace("bring","bring new"))

// 6. includes
console.log(str.includes("bring"))

// 7. split
console.log(str.split(" "))

// 8. trim
let str3 = "   string with spaces   "
console.log(str3.trim())

// 9. charAt
console.log(str.charAt(0))

// 10. charCodeAt
console.log(str.charCodeAt(0))

// 11. concat
console.log(str.concat(" new string"))

// 12. startsWith and endsWith
console.log(str.startsWith("string"))
console.log(str.endsWith("bring"))

// 13. repeat
console.log(str.repeat(2))

// 14. substring
console.log(str.substring(0,6))

// 15. toString
console.log(name.toString())

// 16. valueOf
console.log(name.valueOf())

// 17. padStart and padEnd
console.log(str.padStart(20,"*"))
console.log(str.padEnd(20,"*"))

// 18. match
console.log(str.match(/bring/g))

// 19. search
console.log(str.search(/bring/))

// 20. localeCompare
console.log(str.localeCompare("string bring"))

// 21. fromCharCode
console.log(String.fromCharCode(65,66,67))

// 22. fromCodePoint
console.log(String.fromCodePoint(128512))

// 23. raw
console.log(String.raw`string with \n new line`)

// 24. anchor
console.log(str.anchor("anchor"))

// 25. big
console.log(str.big())

// 26. blink
console.log(str.blink())

// 27. bold
console.log(str.bold())

// 28. fixed
console.log(str.fixed())

// 29. fontcolor
console.log(str.fontcolor("red"))

// 30. fontsize
console.log(str.fontsize("5"))

// 31. italics
console.log(str.italics())

// 32. link
console.log(str.link("https://www.google.com"))

// 33. small
console.log(str.small())

// 34. strike
console.log(str.strike())

// 35. sub and sup
console.log(str.sub())
console.log(str.sup())