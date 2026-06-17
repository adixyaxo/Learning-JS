// Data type comparision in js
var a = 34;
var b = "34";
console.log(a == b); // this will return true because it only checks the value and not the data type
console.log(a === b); // this will return false because it checks both value and data type

var c = null;
var d = undefined;
console.log(c == d); // this will return true because it only checks the value and not the data type
console.log(c === d); // this will return false because it checks both value and data type

var e = 0;
var f = false;
console.log(e == f); // this will return true because it only checks the value and not the data type
console.log(e === f); // this will return false because it checks both value and data type

var g = "0";
var h = false;
console.log(g == h); // this will return true because it only checks the value and not the data type
console.log(g === h); // this will return false because it checks both value and data type

var i = "false";
var j = false;
console.log(i == j); // this will return true because it only checks the value and not the data type
console.log(i === j); // this will return false because it checks both value and data type

var k = "null";
var l = null;
console.log(k == l); // this will return true because it only checks the value and not the data type
console.log(k === l); // this will return false because it checks both value and data type

var m = "undefined";
var n = undefined;
console.log(m == n); // this will return true because it only checks the value and not the data type
console.log(m === n); // this will return false because it checks both value and data type

var o = "NaN";
var p = NaN;
console.log(o == p); // this will return false because NaN is not equal to anything, including itself
console.log(o === p); // this will return false because it checks both value and data type