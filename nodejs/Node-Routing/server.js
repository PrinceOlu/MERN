//  NB: we are going to create 2 routes
// homepage and about
// 1) import modules
const http = require("http");
const url = require("url");

// 2) Define the handle
const requestHandler = (req, res) => {
  // pass the url as a function
  const passUrl = url.parse(req.url, true);
  //   lets create the home route
  if (passUrl.pathname === "/" && req.method === "GET") {
    // send static response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the homepage");
  }
  //   lets create the about route
  else if (passUrl.pathname === "/about" && req.method === "GET") {
    // send static response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the about-page");
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Page not found");
  }
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
