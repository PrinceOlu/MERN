// ======== for free APIs=======
//  https://rapidapi.com/hub
//  https://jsonplaceholder.typicode.com/

// for axious cdn
//  https://cdnjs.com/libraries/axios

// NB: copy and paste the latest axious cdn script into the HTML head

// let us use the API URL
const url = "https://jsonplaceholder.typicode.com/posts";

// using Promise based
// const fetchData = () => {
//   axios
//     .get(url)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// fetchData();

// using async-await
const fetchData2 = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {}
};
fetchData2();
