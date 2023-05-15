const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from home page!");
    res.end();
  }
  if (req.url === "/about") {
    res.write("Hello from about page!");
    res.end();
  } else {
    res.end("cannot find page you look for!");
  }
});
server.listen(5000);
console.log("Server running at http://localhost:5000");
