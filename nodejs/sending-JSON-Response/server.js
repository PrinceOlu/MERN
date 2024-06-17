//  NB: we are going to create 2 routes
// homepage and about
// 1) import modules
const http = require("http");
const url = require("url");

// 2) Define the handler
const requestHandler = (req, res) => {
  const data = {
    id: 123,
    name: "Prince Olusegun",
    email: "olusegun@gmail.com",
  };
  // set the response header to applicaton/JSON
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

// 3) create the server
// we use instance of the http module
const server = http.createServer(requestHandler);

// 4) start out server
const PORT = 3000;
// lets listen to the port
server.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
