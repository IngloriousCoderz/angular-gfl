// HOISTING
// SCOPING

myFunc();

function myFunc() {
  var a, b, i;

  a = 2;

  console.log(a);

  b = 3;

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  var i = 2;

  console.log(i);
}

{
  let a = 2;
}
console.log(a);
