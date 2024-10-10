// promise creation
function firstPromise() {
  // create a promse inside the function
  return new Promise((resolved) => {
    resolved(`first Promise resolved...`);
  });
}
function secondPromise() {
  // create a promse inside the function
  return new Promise((resolved) => {
    resolved(`second Promise resolved...`);
  });
}
function thirdPromise() {
  // create a promse inside the function
  return new Promise((resolved) => {
    resolved(`third Promise resolved...`);
  });
}

// promise chaining
firstPromise()
  .then((resultfromPromise1) => {
    console.log(resultfromPromise1);
    return secondPromise();
  })
  .then((resultfromPromise2) => {
    console.log(resultfromPromise2);
    return thirdPromise();
  })
  .then((resultfromPromise3) => {
    console.log(resultfromPromise3);
  })
  .catch((err) => {
    console.log(err);
  });
