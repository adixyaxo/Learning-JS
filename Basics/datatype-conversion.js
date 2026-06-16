let str = "33"
let i = Number(str) // returns 33
let j = Number("33") // returns 33
let k = Number("33asd") // return NaN
let l = Number("") // returns 0
let m = Number(null) // returns 0
let n = Number(undefined) // returns NaN
console.table(["str",typeof i,i])
console.table(["33",typeof j,j])
console.table(["33asd",typeof k,k])
console.table(["",typeof l,l])
console.table(["null",typeof m,m])
console.table(["undefined",typeof n,n])