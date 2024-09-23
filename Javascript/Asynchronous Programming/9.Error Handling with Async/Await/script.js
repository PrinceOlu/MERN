// creation
const myRandom = async () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
};

// usage
const myValue = async () => {
  try {
    const result = await myRandom();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
myValue();
