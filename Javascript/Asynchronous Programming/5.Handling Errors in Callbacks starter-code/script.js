const divideNumbers = (dividend, divisor, callBack) => {
  // using setTimeout
  setTimeout(() => {
    if (dividend < divisor) {
      callBack(new Error(`Cannot divide ${dividend} by ${divisor}`), null);
    } else {
      callBack(null, dividend / divisor);
    }
  }, 1000);
};

divideNumbers(200, 20, (error, result) => {
  if (error) {
    console.log("Error:", error.message); // Removed unnecessary parentheses
    return;
  } else {
    console.log(`The result is:`, result); // Corrected the template string
  }
});
