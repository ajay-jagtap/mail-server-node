const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.USERNAME, // Your email address
    pass: process.env.PASSWORD // Your email password or an app-specific password if using Gmail
  }
});

// Email options
const mailOptions = {
  from: process.env.USERNAME, // Sender email address
  to: 'ajayjagtap.10@gmail.com', // Recipient email address
  subject: 'Test Email from node server', // Email subject
  text: 'This is a test email sent from Nodemailer' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});