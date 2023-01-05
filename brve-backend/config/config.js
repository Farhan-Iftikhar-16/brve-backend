const nodemailer = require("nodemailer");
module.exports = {
  PORT: 5000,
  mongoURL: 'mongodb://localhost:27017/BRVE_DATABASE',
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  }),
  emailFrom: '',
  FRONTEND_URL: 'http://localhost:4200/',
  TOKEN_SECRET: 'BRVE'
};


