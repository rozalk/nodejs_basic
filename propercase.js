// proper case

const properCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      const splitter = word.split("");

      splitter[0] = splitter[0].toUpperCase();

      return splitter.join("");
    })
    .join(" ");
};
module.exports = { properCase };
