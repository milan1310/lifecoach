const sgMail = require('@sendgrid/mail')

const sendMail = (name, email)=> {
  const html = require('../services/emailTemplate')({name});
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    sender: name,
      from: process.env.ADMIN_EMAIL,
      to: email,
      bcc: "empowerucoachns@gmail.com",
      subject: "Congratulations, you have successfully submitted your Personality Assessment",
      text: "Thank you",
      html: html,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  }
  module.exports = sendMail;