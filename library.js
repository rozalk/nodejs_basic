//create ur own module(library)
//1. Write a functions.
// 2. export that function out of the file
// 3. require that file in the Server file

const getHello = () => {
  console.log("Hello from library");
};

const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};

const getMeow = () => {
  console.log("meow meow");
};
module.exports = { getHello, getNamaste, getMeow };
