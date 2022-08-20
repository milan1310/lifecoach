const sgMail = require('@sendgrid/mail')

const sendMail = (name, email, message, url, type)=> {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  let msgtext = `${message} \n\n Click below to fill your link 👇 \n\n ${url}`;
  const msg = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: `Please ${type}`,
    text: msgtext,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error)
    })
  }
  module.exports = sendMail;
