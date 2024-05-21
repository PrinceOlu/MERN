// 1) import module
// 2) Define the handle
// 3) create the server
// 4) start out server

// 1) import module
const http = require("http");
// console.log(http);

// 2) Define the handle
const requestHandler = (req, res) => {
  // send static response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world");
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
