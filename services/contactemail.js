const sgMail = require('@sendgrid/mail')

const sendMail = (name, email,message)=> {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    sender: name,
    from: email,
    to: process.env.ADMIN_EMAIL,
    subject: "Query About Coaching or other stuff",
    text: message,
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