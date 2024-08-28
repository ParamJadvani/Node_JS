const http = require("http");
const fs = require("fs");

const PORT = 8090;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500 Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (["/login", "/signup", "/contact", "/service"].includes(req.url)) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      JSON.stringify({ message: `This is the ${req.url.substring(1)} route` })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
