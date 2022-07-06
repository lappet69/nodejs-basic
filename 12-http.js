const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to home page`);
  } else if (req.url === "/about") {
    res.end(`this is a about page`);
  } else {
    res.end(`<h1>Oops!</h1>
      <p>This page is doesn't exist</p>
      <a href='/'> back home</a>`);
  }
});

server.listen(5000);
