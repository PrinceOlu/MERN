// ======== for free APIs=======
//  https://rapidapi.com/hub
//  https://jsonplaceholder.typicode.com/

// for axious cdn
//  https://cdnjs.com/libraries/axios

// NB: copy and paste the latest axious cdn script into the HTML head

// let us use the API URL
const url = "https://jsonplaceholder.typicode.com/posts";

// Axious  method using Promise based
// const fetchData = () => {
//   axios
//     .get(url)
//     .then((result) => {
//       // we  dont need return a promise, it resolve the promise by itself and passes the json data itself
//       console.log(result.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// fetchData();

// Axious  method using async/await
const fetchData = async () => {
  try {
    const result = await axios.get(url);
    // return the data as a promise
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
