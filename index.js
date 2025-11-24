const username = "Sam";

const course = "JavaScript";

console.log(`Hello, welcome to the course ${course}, ${username}!`);
 
const name = "Sam";

const age = 21;

const student = {

  name: name,

  age: age,

  greet: function () {

    console.log("Hello");

  }

};

console.log(student);
student.greet();
 
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Smith"));
 
