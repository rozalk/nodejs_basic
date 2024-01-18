// const lowCase = (String) => {
//   const split = String.split(" ")
//     .map((word) => word.toLowerCase())
//     .join("-");
// };
const slugify = require("slugify");

// NPM Slugify concept
const lowCase = (String) => {
  const res = slugify(string, "-");
  console.log(res);
};

module.exports = { lowCase };
