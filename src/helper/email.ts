import NodeMailer from 'nodemailer';
const MailGen = require('mailgen')


type TSendEmail = {
  reciverEmail: string;
  subject: string;
  text: string;
};

const config = {
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PW!,
  },
};


export const sendEmail = async ({
  reciverEmail,
  subject,
  text,
}: TSendEmail) => {

//   const mailGen = new MailGen({
//     theme: 'default',
//     product: {
//         // Appears in header & footer of e-mails
//         name: 'Mailgen',
//         link: 'https://mailgen.js/'
//         // Optional product logo
//         // logo: 'https://mailgen.js/img/logo.png'
//     }
// })
// var email = {
//   body: {
//       name: 'John Appleseed',
//       intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
//       action: {
//           instructions: 'To get started with Mailgen, please click here:',
//           button: {
//               color: '#22BC66', // Optional action button color
//               text: 'Confirm your account',
//               link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
//           }
//       },
//       outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
//   }
// };

// // Generate an HTML email with the provided contents
// var emailBody = mailGen.generate(email);
// console.log("emailBody: ",emailBody);



  
  const mailData = {
    from: reciverEmail,
    to: process.env.NODEMAILER_EMAIL!,
    subject,
    text,
    html: "<h1>das</h1>",
  };

  const transporter = NodeMailer.createTransport(config);

 transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log('error: ', error);
    }
    // console.log('info: ', info);
  });
  return;
};
