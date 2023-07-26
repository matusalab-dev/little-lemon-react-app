// // import "core-js/modules/stream";
// // import "stream-browserify";

// const nodemailer = require("nodemailer");

// const sendEmail = (email, subject, body) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "your_email@gmail.com",
//       pass: "your_password",
//     },
//   });

//   const mailOptions = {
//     from: "your_email@gmail.com",
//     to: email,
//     subject: subject,
//     html: body,
//   };

//   transporter.sendMail(mailOptions, (error, message) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log("Email sent successfully!");
//     }
//   });
// };

// export default sendEmail;
