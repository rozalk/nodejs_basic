const http = require("http");
// const greeting = require("./library"); //connecting from library.js...
// const calc = require("./math"); //connecting from math.js...
// const upperCase = require("to-upper");
const lib = require("./library1");
const prop = require("./exercise");

http
  .createServer((request, response) => {
    // greeting.getHello();
    // greeting.getNamaste("Rojal"); //calling...1`
    // greeting.getMeow();
    response.writeHead(200, { "Content-Type": "texthtml" });
    response.write("Hello World");
    response.write("Hello I am rowszal");
    // const addd = calc.getAdd(10, 20);
    // const subb = calc.getSub(10, 20);
    // const multi = calc.getMulti(10, 20);
    // console.log(addd);
    // console.log(subb);
    // console.log(multi);
    // const result = upperCase("Hello rowszal");
    const add = lib.addNum(20, 30);
    console.log({ add });

    const multi = lib.multiNum(20, 30);
    console.log(multi);
    const proper = prop.properUp("rojal karki");
    console.log({ proper });

    // response.write(result);

    response.end();
  })
  .listen(8000);
console.log("Server is running");
