const http = require("http");
const { properCase } = require("./propercase");
const loww = require("./low");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const lab = properCase("hello i am rozal");
    console.log(lab);
    loww.lowCase("Back-End and Web Development");
    res.end("Hii from server");
  })
  .listen(5555);
console.log("server is running");
