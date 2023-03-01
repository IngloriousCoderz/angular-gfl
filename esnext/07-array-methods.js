const arr = [1, 2, 3, 4, 5];

const square = (item) => item ** 2;
const isEven = (item) => item % 2 === 0;
const sum = (a, b) => a + b;

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
{
  const squares = [];
  for (let i = 0; i < arr.length; i++) {
    const square = arr[i] ** 2;
    squares.push(square);
  }
  console.log(squares);
}

{
  const squares = [];
  for (const item of arr) {
    const square = item ** 2;
    squares.push(square);
  }
  console.log(squares);
}

{
  const squares = []; // init
  arr.forEach((item) => {
    const square = item ** 2;
    squares.push(square); // acc
  });
  console.log(squares); // return
}

{
  const squares = arr.map((item) => {
    return item ** 2;
  });
  console.log(squares);
}

{
  const squares = arr.map((item) => item ** 2);
  console.log(squares);
}

{
  const squares = arr.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = []; // init
  arr.forEach((item) => {
    if (isEven(item)) {
      evens.push(item); // acc
    }
  });
  console.log(evens); // return
}

{
  const evens = arr.filter((item) => isEven(item));
  console.log(evens);
}

{
  const evens = arr.filter(isEven);
  console.log(evens);
}

{
  const firstEven = arr.find(isEven);
  console.log(firstEven);
}

{
  const firstEvenIndex = arr.findIndex(isEven);
  console.log(firstEvenIndex);
}

{
  const hasEven = arr.some(isEven);
  console.log(hasEven);
}

{
  const allEven = arr.every(isEven);
  console.log(allEven);
}

// sum: [1, 2, 3, 4, 5] -> 15

{
  let acc = 0; // init
  arr.forEach((item) => {
    acc += item; // accumulation
  });
  console.log(acc); // return
}

{
  let acc = arr[0]; // init
  arr.slice(1).forEach((item) => {
    acc += item; // accumulation
  });
  console.log(acc); // return
}

{
  const result = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(result);
}

{
  const result = arr.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  console.log(result);
}

{
  const result = arr.reduce(sum);
  console.log(result);
}

{
  const squares = arr.reduce((acc, item) => {
    acc.push(item ** 2);
    return acc; // acc
  }, []);
  console.log(squares); // return
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  console.log(sumOfSquareEvens(arr));

  function sumOfSquareEvens(numbers) {
    let acc = 0;
    for (const item of numbers) {
      if (isEven(item)) {
        const square = item ** 2;
        acc += square;
      }
    }
    return acc;
  }
}

{
  console.log(sumOfSquareEvens(arr));

  function sumOfSquareEvens(numbers) {
    const evens = numbers.filter(isEven);
    const squares = evens.map(square);
    const result = squares.reduce(sum);
    return result;
  }
}

{
  console.log(sumOfSquareEvens(arr));

  function sumOfSquareEvens(numbers) {
    return numbers //
      .filter(isEven)
      .map(square)
      .reduce(sum);
  }
}

// sumOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  console.log(sumOfEvenSquares(arr));

  function sumOfEvenSquares(numbers) {
    let acc = 0;
    for (const item of numbers) {
      const square = item ** 2;
      if (isEven(square)) {
        acc += square;
      }
    }
    return acc;
  }
}

{
  console.log(sumOfSquareEvens(arr));

  function sumOfSquareEvens(numbers) {
    return numbers //
      .map(square)
      .filter(isEven)
      .reduce(sum);
  }
}

// pipe, compose

// numbers.pipe(
//   map(square),
//   filter(isEven),
//   reduce(sum)
// )
