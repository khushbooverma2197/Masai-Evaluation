// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`); // "5 + 7 = 12"
const multiline = `Line 1
Line 2
Line 3`;
console.log(multiline);
const firstName = "John";
const lastName = "Doe";
console.log(`Full name: ${firstName} ${lastName}`);
// -----------------------------
// 2. Arrow Functions & this
// -----------------------------
// a) convert normal to arrow
const square = n => n * n;
console.log(square(5)); // 25
// b) explain why arrow logs undefined:
// Arrow functions don't have their own `this`. Example:
const obj = {
 value: 50,
 test: () => console.log(this.value) // this is not obj -> undefined (or window.value in browser)
};
obj.test(); // undefined
// c) rewrite using normal function so printing works:
const obj2 = {
 value: 50,
 test() { console.log(this.value); } // normal method binds this to obj2
};
obj2.test(); // 50
// -----------------------------
// 3. Rest, Spread & Copying Objects
// -----------------------------
// a) shallow copy using spread
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);
// b) merge two objects using spread
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
console.log(mergedObj);
// c) maxValue using rest
const maxValue = (...nums) => nums.length ? Math.max(...nums) : -Infinity;
console.log(maxValue(3, 7, 2)); // 7
// -----------------------------
// 4. Destructuring & Optional Chaining
// -----------------------------
const arr = [10, 20, 30];
// a) destructure a and b
const [a1, b1] = arr;
console.log(a1, b1); // 10 20
const laptop = { brand: "Dell", ram: "8GB" };
// b) destructure brand
const { brand } = laptop;
console.log(brand); // "Dell"
// c) safely access with optional chaining
const info = {};
console.log(info?.user?.name); // undefined, not an error
// -----------------------------
// 5. Scoping (let/var/const)
// -----------------------------
// a) var in for loop is function/global scoped
for (var i = 0; i < 3; i++) {}
console.log(i); // 3
// b) let in for loop is block scoped
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError: j is not defined (uncomment to test)
// c) const reason: prevents reassignment (immutable binding)
const PI = 3.14;
// PI = 3; // TypeError if uncommented
// -----------------------------
// 6. Ternary Operator – Practice
// -----------------------------
// a) convert speed if to ternary
const getSpeedLabel = kmph => (kmph > 60 ? "Fast" : "Normal");
console.log(getSpeedLabel(70)); // Fast
// b) adult ternary
const isAdult = age => (age >= 18 ? "Adult" : "Minor");
console.log(isAdult(20)); // Adult
// c) nested ternary: Positive/Zero/Negative
const sign = n => (n > 0 ? "Positive" : (n === 0 ? "Zero" : "Negative"));
console.log(sign(5), sign(0), sign(-2)); // Positive Zero Negative
// -----------------------------
// 7. Spread, Rest & Arrays
// -----------------------------
const nums = [1, 2, 3];
// a) add 4,5 using spread
const numsPlus = [...nums, 4, 5];
console.log(numsPlus); // [1,2,3,4,5]
// b) combine arrays
const arrX = ["x", "y"];
const arrZ = ["z"];
const combined = [...arrX, ...arrZ];
console.log(combined); // ["x","y","z"]
// c) function using rest that returns array of names
const printNames = (...names) => names;
console.log(printNames("A", "B", "C")); // ["A","B","C"]
// -----------------------------
// 8. Object Destructuring & Shorthand
// -----------------------------
const userObj = { id: 101, status: "active" };
// a) destructure
const { id: userId, status } = userObj;
console.log(userId, status);
// b) convert to shorthand
const id = 101;
const role = "admin";
const userShort = { id, role };
console.log(userShort);
// c) create object with shorthand and method
const nameVal = "Sam";
const ageVal = 21;
const student = {
 nameVal,
 ageVal,
 greet() { console.log("Hello"); } // method shorthand
};
console.log(student);
student.greet();
// -----------------------------
// 9. Template Literals (More Practice)
// -----------------------------
console.log(`Today is ${new Date().toDateString()}`);
const NAME = "Alex";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);
// -----------------------------
// 10. Arrow Function Shorthands
// -----------------------------
const add = (x, y) => x + y;
console.log(add(2, 3));
const isAdultFn = age => age >= 18;
console.log(isAdultFn(19)); // true
const double = n => n * 2;
console.log(double(6)); // 12
// -----------------------------
// 11. Spread Operator (Arrays & Objects)
// -----------------------------
// a) clone an array using spread
const arrClone = [...nums];
console.log(arrClone);
// b) add element 100 to beginning
const with100 = [100, ...nums];
console.log(with100);
// c) merge two objects and override one property
const obj1 = { name: "A", val: 1 };
const obj3 = { val: 2, extra: true };
const mergedOverride = { ...obj1, ...obj3 }; // val becomes 2
console.log(mergedOverride);
// -----------------------------
// 12. Optional Chaining (More Practice)
// -----------------------------
const user = { name: "Alex", address: { city: "Bangalore" } };
console.log(user?.address?.city); // "Bangalore"
console.log(user?.job?.title); // undefined (safe)
// Example preventing runtime error
const data = {};
console.log(data?.user?.details?.email); // undefined, no TypeError
// -----------------------------
// End of compiled answers
// -----------------------------
