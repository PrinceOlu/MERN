// Function to handle alert button clicks
function alertButton() {
  console.log("Button clicked");
}

const alertBtn = document.getElementById("alertButton");
// Add click event listener to the alert button
alertBtn.addEventListener("click", alertButton);

// Function to remove the event listener
function removeButton() {
  // Correctly remove the event listener from the alertBtn element
  alertBtn.removeEventListener("click", alertButton);
  console.log("Alert removed");
}

// Obtain a reference to the removeButton element
const removeBtn = document.getElementById("removeButton");
// Add click event listener to the remove button
removeBtn.addEventListener("click", removeButton);
