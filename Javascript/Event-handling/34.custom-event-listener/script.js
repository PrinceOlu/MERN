// accessing the username input and submit button
const username = document.getElementById("username");
const submitButton = document.getElementById("submitButton");

// lets crete a custom event using CLASSES
const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

// lets add an event listenner to handle the custom event
document.addEventListener("usernameSubmitted", function (e) {
  console.log(`Username ${e.detail.text} has been submitted`);
});

// attach event listener to the submit button
submitButton.addEventListener("click", function (e) {
  // lets poulate the detail property with the input value
  //   e.preventDefault();
  usernameSubmitted.detail.text = username.value;
  //   dispatch the event
  document.dispatchEvent(usernameSubmitted);
});
