const arr = [1, 2, 3, 4, 5];

{
  const first = arr[0];
  const second = arr[1];
  const last = arr[arr.length - 1];
  const rest = arr.slice(2);

  console.log(first, second, last, rest);
}

{
  // spread operator
  const [first, second, ...rest] = arr;
  const last = arr[arr.length - 1];
  console.log(first, second, last, rest);

  const clone = [...arr];
  console.log(clone, clone === arr);
}

const obj = { a: 1, b: 2, c: 3, d: 4 };

{
  const firstProperty = obj.a;
  const b = obj.b;
  console.log(firstProperty, b);
}

{
  const { a: firstProperty, b, ...rest } = obj;
  console.log(firstProperty, b, rest);

  const clone = { ...obj };
  console.log(clone, clone === obj);
}

const deepClone = JSON.parse(JSON.stringify([{ a: 1 }]));

{
  // rest parameters

  console.log(sum(1, 2, 3));

  function sum(number1, ...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
}
