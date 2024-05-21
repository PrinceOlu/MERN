//  NB: we are going to create 2 routes
// homepage and about
// 1) import modules
const http = require("http");
const url = require("url");

// 2) Define the handle
const requestHandler = (req, res) => {
  // pass the url as a function
  const passUrl = url.parse(req.url, true);
  const patheName = passUrl.pathname;
  // lets split the pathname
  const splitPath = patheName.split("/").filter(Boolean);
  if (splitPath[0] === "products" && splitPath[1]) {
    // then we perform a db query
    // by taking the product and sending to the user
    const productId = splitPath[1];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`you elect product id ${productId}`);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Product Not found...`);
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
