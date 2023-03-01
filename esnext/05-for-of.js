const arr = [1, 2, 3, 4, 5];

{
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const obj = { a: 1, b: 2, c: 3, d: 4 };

{
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
}

{
  for (const key in arr) {
    console.log(key, arr[key]);
  }

  // delete arr[2];
  // console.log(arr);
}

{
  for await (const item of arr) {
    console.log(item, arr.indexOf(item));
  }
}
