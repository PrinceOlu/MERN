// lets create a function tohandle the submit button
function submitBtn() {
  // lets fetch the username inputs
  const username = document.getElementsByName("username");
  //   console.log(username);
  // lets loop through
  for (let u = 0; u < username.length; u++) {
    if (username[u].value !== "") {
      console.log(`youe username is ${username[u].value}`);
    }
  }
  // lets fetch the email inputs
  const email = document.getElementsByName("email");
  //   console.log(email);
  // lets loop through
  for (let a = 0; a < email.length; a++) {
    if (email[a].value !== "") {
      console.log(`youe email is ${email[a].value}`);
    }
  }
  // let get the checkboxes as a nodelist
  const languageProficiency = document.getElementsByName("languageProficiency");

  // let get the checkbox that is checked by usng for-loop
  for (let i = 0; i < languageProficiency.length; i++) {
    // use condtion to check further
    if (languageProficiency[i].checked) {
      console.log(`You have selected : ${languageProficiency[i].value}`);
    }
  }
}
