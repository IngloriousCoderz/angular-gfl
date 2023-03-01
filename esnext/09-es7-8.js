// async/await

async function performFetches() {
  try {
    const response1 = await $.ajax("http://localhost:3000/users");
    console.log(reponse1);
    const { id } = response1;

    const response2 = await $.ajax(`http://localhost:3000/users/${id}`);
    console.log(response2);
    const { username } = response2;

    const response3 = await $.ajax(
      `http://localhost:3000/phones?username=${username}`
    );
    console.log(response3);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("All done!");
  }
}

async function performInParallel(username) {
  const fortyTwo = await new Promise((resolve) => resolve(42));

  const [phones, computers] = await Promise.all([
    $.ajax(`http://localhost:3000/phones?username=${username}`),
    $.ajax(`http://localhost:3000/computers?username=${username}`),
  ]);
}

// object static methods

for (const key in obj) {
}

Object.keys(obj).forEach((key) => console.log(key));
Object.values(obj).forEach((value) => console.log(value));
Object.entries(obj).forEach(([key, value]) => console.log(key, value));

// array includes

[1, 2, 3, 4, 5].includes(3);

const httpStatus = 200;

httpStatus === 200 || httpStatus === 201 || httpStatus === 204;

const SUCCESS_STATUSES = [200, 201, 204];

SUCCESS_STATUSES.includes(httpStatus);

const obj = {
  key: "value",
  anotherKey: "anotherValue",
};
