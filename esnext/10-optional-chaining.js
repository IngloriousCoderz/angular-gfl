console.log(1 == 1);
console.log(1 == "1");
console.log(1 === 1);
console.log(1 === "1");
console.log(1 === parseInt("1ciao"));
console.log(1 === Number("1ciao"));
console.log(1 === +"1ciao");
console.log(true === true);
console.log(true === "true");
console.log(true === Boolean("true"));
console.log(true === Boolean("false"));
console.log(true === ("true" === "true"));

const a = "";
console.log(a == null);
console.log(a === null);
console.log(a == undefined);
console.log(a === undefined);
console.log(typeof a);

if (a != null) {
}

const obj = {
  address: {
    street: "Via Roma",
  },
};

console.log(obj.address?.street);

// truthy
console.log(a || obj);
console.log(a ?? obj);
