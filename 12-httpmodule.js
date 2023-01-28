const http = require("http");

//req represents the incoming request and res is the response is what you are sending back
const server = http.createServer((req, res) => {
  res.write("Welcome to our home page");
  res.end();
});

server.listen(5001);
