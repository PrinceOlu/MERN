// ======== for free APIs=======
//  https://rapidapi.com/hub
//  https://jsonplaceholder.typicode.com/

// let us use the API URL
const url = "https://jsonplaceholder.typicode.com/posts";

// create a new instance of XMLHttpRequest
const xhr = new XMLHttpRequest();

// configure the request
xhr.open("GET", url, true);

// Attach an event listener to handle changes in the request state.
xhr.onreadystatechange = () => {
  // check if the request is complete (readystate = 4) and successful (status = 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // parse as  json data
    console.log(JSON.parse(xhr.responseText));
  }
  // Handle errors
  if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.statusText);
  }
};

// send the request
xhr.send();
