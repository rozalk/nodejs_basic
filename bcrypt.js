const bcryptjs = require("bcryptjs");

const encryptPass = (String) => {
  //hash...

  return bcryptjs.hashSync(String, 10);
  // console.log(hash);
};

const hashed = encryptPass("passsword");
console.log(hashed);

const decryptPass = (String, hash) => {
  //compare...
  return bcryptjs.compareSync(String, hash);
};

const isValidPw = decryptPass("passwords", hashed);
console.log({ isValidPw });
