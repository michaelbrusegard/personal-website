require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors');

exports.processEmail = (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDING_EMAIL,
      pass: process.env.SENDING_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL,
    subject: 'New contact message from ' + name,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};

const corsMiddleware = cors({ origin: process.env.DOMAIN_URL });
exports.sendEmail = (req, res) => {
  corsMiddleware(req, res, () => {
    exports.processEmail(req, res);
  });
};
