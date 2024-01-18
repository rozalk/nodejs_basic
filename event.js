// Event...

const events = require("events");

//event initialize
const eventEmmitter = new events.EventEmitter();

//fn define...

const sayName = () => {
  console.log("I am Rojal");
};

const sayHi = () => {
  console.log("Hello");
  sayName();
};

eventEmmitter.addListener("Hi", sayHi); //assign...

eventEmmitter.emit("Hi"); //calling the event...
