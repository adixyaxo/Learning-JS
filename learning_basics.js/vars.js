// varibales 
var num1 = 34;
var num2 = 35;
console.log(num1 + num2)

// Data types in js 
// strings
var st1 = "This is a string in dq"
var st2 = 'This is a string in sq'
// num
var num1 = 34;
var num2 = 35;

var marks = { // this is an object 
    ravi: 34,
    mavi: 35,
    savi: 56,
}

console.log(marks);
console.log(marks["ravi"]);
console.log(marks["mavi"]);
console.log(marks["savi"]);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// undefined var when an var is created but not initialed it is given undefined value
var und = undefined;
console.log(und);
var no_value_var;
console.log(no_value_var);

// null var when a var is created and given null value
var null_var = null;
console.log(null_var);


// At high level in js we have two kinds of data types 
/*
1 . Primitive data types - 6 Types ie undefined, null, number, string, boolean, symbol
2 . Refrence data types - Arrays and Objects

*/

var arr = [1, undefined, null, "hello nigga", true, 3.14];
console.log(arr);

// Operators in Javascript 
// Arthematic Operators 
var a = 35;
var b = 45;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);
// Assignment Operators
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);

// Comparison Operators
console.log("Is a equal to b?", a === b);
console.log("Is a not equal to b?", a !== b);
console.log("Is a greater than b?", a > b);
console.log("Is a less than b?", a < b);
console.log("Is a greater than or equal to b?", a >= b);
console.log("Is a less than or equal to b?", a <= b);

// Logical Operators
console.log(true && false); // Logical AND // dono true => true ek false => false
console.log(true || false); // Logical OR // ek true => true dono false => false 
console.log(!true); // Logical NOT 
