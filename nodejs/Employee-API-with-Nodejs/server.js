// 1) import module
// 2) Define the handle
// 3) create the server
// 4) start out server

// 1) import module
const http = require("http");
// console.log(http);

// mini databse
const employees = [
  { id: 1, name: "Prince" },
  { id: 2, name: "Moyo" },
  { id: 3, name: "Mofe" },
];
// 2) Define the handle
const requestHandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];
  //   connect to postman to verify this connection
  //   console.log(parts);

  //   Get all employess
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }
  //   Get a single empoyee
  else if (method == "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ employee, employees }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Employee not found" }));
    }
  }
  //   create a new employee
  else if (method === "POST" && url === "/employees") {
    let body = "";
    // Listenning the POST REQUEST event
    req.on("data", (chunk) => {
      body += chunk;
    });
    // SEND THE RESPONSE
    req.on("end", () => {
      const newEmployee = JSON.parse(body);
      // push into the employee array
      employees.push(newEmployee);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newEmployee));
    });
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
