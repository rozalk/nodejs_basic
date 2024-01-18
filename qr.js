var qrcode = require("qrcode-terminal");

const qrGenerator = () => {
  qrcode.generate(
    "https://www.facebook.com/profile.php?id=100008153536976",
    function (qrcode) {
      console.log(qrcode);
    }
  );
};
qrGenerator();
