// const nodemailer = require("nodemailer");
// async function sendEmail(data) {
//   //  console.log( "data " ,data);
//   //   transpoter to send/transport email

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//       user: 'uttamkr5599@gmail.com',
//       pass: "hokjxwjymqzkqdbj"
//     }
//   });

//   transporter.sendMail({
//     to: `${data.email}`,
//     from: 'chikkuuu@gmail.com',
//     subject: data.subject,
//     html: data.body,
//   })
//     .then(() => console.log('mail sent successfully'))
//     .catch((err) => console.log("err", err))

// }

// module.exports = { sendEmail, }


// // ! -----must have data in while calling sendEmail() -----

// // data = {
// //     email : "fsociety430@gmail.com",
// //     subject : "somehting happend",
// //     body : "email data cloud be in html/text / json /image"
// // }


// // sending mails

//  const otp = Math.round((Math.random() * 9999))
//  sendEmail({ email:'uttamkr5599@gmail.com', subject: "Login OTP", body: ` OTP is ${otp}` })


// // GoogleKey = 
