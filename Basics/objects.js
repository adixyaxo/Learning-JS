// singleton object
const my_obj = {
    name: "John",
    age: 30,
    is_student: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

my_obj.greet() // calls the greet method of the object
console.log(my_obj.name) // returns the name property of the object
console.log(my_obj["age"]) // returns the age property of the object
my_obj.is_student = false // changes the value of the is_student property
console.log(my_obj.is_student) // returns the updated value of the is_student property
delete my_obj.address // deletes the address property from the object
console.log(my_obj.address) // returns undefined because the address property has been deleted