const http = require("http");

//req represents the incoming request and res is the response is what you are sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
    <h1>Opps!</h1>
    <p> We can't find the page you are looking for </p>
    <a href="/">back home</a>
    `);
});

server.listen(5001);
