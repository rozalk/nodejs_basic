// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "rozalkarki9865@gmail.com",
//     pass: "",
//   },
// });
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// const mailOptions = {
//   from: "rozalkarki9865@gmail.com",
//   to: "romishpokharel9@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "Hello i am rozal i am writing u a mail from nodejs",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "rozalkarki9865@gmail.com",
    pass: "",
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error.response);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Rozal karki" <foo@example.com>', // sender address
    to: "yadavdes7@gmail.com", // list of receivers
    subject: "Padhai karo", // Subject line
    text: "Padhlo bete", // plain text body
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',

    attachments: [
      {
        filename: "node.jpg",
        path: "./node.jpg",
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
      {
        // file on disk as an attachment
        filename: "NM.pdf",
        path: "./NM.pdf", // stream this file
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
