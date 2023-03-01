$.ajax(
  url,
  (response) => {
    console.log(reponse);
  },
  (error) => {
    console.error(error);
  }
);

setTimeout(() => {
  console.log("A second has passed");
}, 1000);

$.ajax(
  "http://localhost:3000/users",
  (response1) => {
    console.log(reponse1);
    const { id } = response1;

    $.ajax(
      `http://localhost:3000/users/${id}`,
      (response2) => {
        console.log(response2);

        const { username } = response2;

        $.ajax(
          `http://localhost:3000/phones?username=${username}`,
          (response3) => {
            console.log(response3);
          },
          (error3) => {
            console.error(error3);
          }
        );
      },
      (error2) => {
        console.error(error2);
      }
    );
  },
  (error1) => {
    console.error(error1);
  }
);

$.ajax("http://localhost:3000/users", handleResponse1, handleError1);

function handleResponse1(response1) {
  console.log(reponse1);
  const { id } = response1;

  $.ajax(`http://localhost:3000/users/${id}`, handleResponse2, handleError2);
}

function handleError1(error1) {
  console.error(error1);
}

function handleResponse2(response2) {
  console.log(response2);

  const { username } = response2;

  $.ajax(
    `http://localhost:3000/phones?username=${username}`,
    handleResponse3,
    handleError3
  );
}

function handleError2(error2) {
  console.error(error2);
}

function handleResponse3(response3) {
  console.log(response3);
}

function handleError3(error3) {
  console.error(error3);
}

$.ajax(`http://localhost:3000/phones?username=${username}`, handlePhones);
$.ajax(`http://localhost:3000/computers?username=${username}`, handleComputers);

const promise = $.ajax(url);

// promise pending

// promise settled

// promise resolved
promise
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((anotherResponse) => {});

// promise failed
promise.catch((error) => {
  console.error(error);
});

$.ajax("http://localhost:3000/users")
  .then((response1) => {
    console.log(reponse1);
    const { id } = response1;
    return $.ajax(`http://localhost:3000/users/${id}`);
  })
  .then((response2) => {
    console.log(response2);
    const { username } = response2;
    return $.ajax(`http://localhost:3000/phones?username=${username}`);
  })
  .then((response3) => {
    console.log(response3);
  })
  .catch((error1) => {
    console.error(error1);
  })
  .finally(() => {});

const promise1 = $.ajax(`http://localhost:3000/phones?username=${username}`);
const promise2 = $.ajax(`http://localhost:3000/computers?username=${username}`);

const promise3 = Promise.all([promise1, promise2]);

promise3.then(([response1, response2]) => {
  return [...response1, ...response2];
});

Promise.all([
  $.ajax(`http://localhost:3000/phones?username=${username}`),
  $.ajax(`http://localhost:3000/computers?username=${username}`),
])
  .then(([response1, response2]) => {
    return [...response1, ...response2];
  })
  .catch((error) => {});

Promise.allSettled([
  $.ajax(`http://localhost:3000/phones?username=${username}`),
  $.ajax(`http://localhost:3000/computers?username=${username}`),
]).then(([response1, response2]) => {
  return [...response1, ...response2];
});

// promisify

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A second has passed");
  }, 1000);
});

new Promise((resolve, reject) => {
  $.ajax(url, resolve, reject);
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.race([
  new Promise((resolve, reject) => {
    $.ajax(url, resolve, reject);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timeout error");
    }, 3000);
  }),
]);
