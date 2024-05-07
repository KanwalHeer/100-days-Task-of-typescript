//Union Types
var myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
//Literal Types
//For example, you can define a literal type like this:
var direction;
//Here's an example of using a literal type in a function parameter:
function setColor(color) {
    console.log(color);
}
setColor("red");
//Nullable Types
//In TypeScript, you can create a nullable type by appending | null to an existing data type. For example:
var username = "Glicher"; // The variable can hold a string or null
var age = null; // The variable can hold a number or null
console.log(username);
console.log(age);
//Here's an example of using nullable types with function parameters:
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
// Use the type alias for string
var myName = "Glitcher";
// Use the type alias for the union type
var myValue = 10;
var alice1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob1 = {
    name: "Bob",
    age: 25,
};
console.log(alice1);
console.log(bob1);
var alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
var person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
