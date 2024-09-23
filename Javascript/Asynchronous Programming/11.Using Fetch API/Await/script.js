// ======== for free APIs=======
//  https://rapidapi.com/hub
//  https://jsonplaceholder.typicode.com/

// let us use the API URL
const url = "https://jsonplaceholder.typicode.com/todos";

// fetch method using Promise based
// steps
// 1) create the fetch function
// 2) bring in the fetch Method and pass the URL
// 3) add .then to convert it to a promise
// 4) we return a promise in json format
// 5) chain the data to the result to get the actual data
// 6) catch the error

//1) create the fetch function
// const fetchData = () => {
//   //2)  bring in the fetch Method and pass the URL
//   fetch(url)
//     //3) add .then to convert it to a promise
//     .then((result) => {
//       //4) we return a promise in json format
//       return result.json();
//     })
//     //5) chain the data to the result to get the actual data
//     .then((data) => {
//       console.log(data);
//     })
//     // 6) catch the error
//     .catch((error) => {
//       console.log(error);
//     });
// };
// fetchData();
// fetch method using async/await
// steps
// 1) create a function
// 2) use try catch
// 3) lets wait for the promise using the fetch method
// 4) return the data as a promise
// 5) lets consume the promise as a data using .then

// create a function
const fetchData = async () => {
  // use try catch
  try {
    // lets wait for the promise using the fetch method
    const result = await fetch(url);
    // return the data as a promise
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
// lets consume the promise as a data using .then
fetchData().then((data) => {
  console.log(data);
});
