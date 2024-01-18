//write a js library and import it into index file.
//Library should contain add and multiply function.

//write a js function that uses proper-upper-case npm package to convert into proper case.
//import into index file.

const properUp = (string) => {
  return string
    .split(" ")
    .map((word) => {
      const splitter = word.split("");

      splitter[0] = splitter[0].toUpperCase();

      return splitter.join("");
    })
    .join(" ");
};
module.exports = { properUp };
