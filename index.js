const fs = require("fs");
const http = require("http");

const server = http
  .createServer((req, resp) => {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) throw err;
      resp.writeHead(200, { "Content-type": "text/html" });
      resp.write(data);
      resp.end();
    });
  })
  .listen(5000, () => {
    console.log("Server is set up at port 5000");
  });
