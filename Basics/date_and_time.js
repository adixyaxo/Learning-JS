// Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())


// how to declare dates

const jan_23_26 = new Date(2026,0,23) // the new keyword is important otherwise it will give you wrong date
const mm_dd_yy = new Date("01-23-2026")
const yy_mm_dd = new Date("2026-01-23")
console.log(jan_23_26.toString())
console.log(mm_dd_yy.toString())
console.log(yy_mm_dd.toString())