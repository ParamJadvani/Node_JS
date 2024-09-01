const http = require("http");
const fs = require("fs");
const PORT = 8090;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "Text/Html" });
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) return res.end("Server Error");

      res.end(data);
    });
  } else if (["/login", "/signup", "/contact", "/service"].includes(req.url)) {
    res.end(
      JSON.stringify({ message: `This is the ${req.url.substring(1)} route` })
    );
  } else {
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
