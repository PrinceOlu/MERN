//  NB: we are going to create 2 routes
// homepage and about
// 1) import modules
const http = require("http");
const url = require("url");

// 2) Define the handle
const requestHandler = (req, res) => {
  // pass the url as a function
  const passUrl = url.parse(req.url, true);
  // Extract query
  const queryParameters = passUrl.query;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Welcome`);
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
