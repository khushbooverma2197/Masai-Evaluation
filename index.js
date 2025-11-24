// a) isEven: returns true if n is even, else false

const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true

console.log(isEven(7)); // false
 
// b) rewrite the if (marks >= 35) ... using a ternary

const marksToResult = marks => (marks >= 35 ? "Pass" : "Fail");

console.log(marksToResult(40)); // "Pass"

console.log(marksToResult(20)); // "Fail"
 
// c) greet(name): prints "Hello, <name>" or "Hello, Guest" if no name passed

const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);

greet("Sam");   // prints: Hello, Sam

greet();        // prints: Hello, Guest
 
