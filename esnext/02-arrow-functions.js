// function declaration
// HOISTING

// console.log(sum(2, 3));

// function sum(a, b) {
//   return a + b;
// }

// function expression

// myFunc(4);

// const myFunc = function (event) {
//   console.log(event);
// };

// arrow function
// conciseness

const sum = (a, b) => a + b;

console.log(sum(2, 3));

// outer scope binding

console.log(this);
button.onclick = (event) => {
  console.log(event.target);
  console.log(this);
};
