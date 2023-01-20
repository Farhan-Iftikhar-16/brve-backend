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
  TOKEN_SECRET: 'BRVE',
  HASH_TAGS: [
    {
      "label": "Connecting Strangers",
      "value": "connectingstrangers"
    },
    {
      "label": "Connecting Friends",
      "value": "connectingfriends"
    },
    {
      "label": "Connecting Family",
      "value": "connectingfamily"
    },
    {
      "label": "Leader",
      "value": "leader"
    },
    {
      "label": "Better Together",
      "value": "bettertogether"
    },
    {
      "label": "Inspiring",
      "value": "inspiring"
    },
    {
      "label": "Random Act Of Kindness",
      "value": "randomactofkindness"
    },
    {
      "label": "Big Impact",
      "value": "bigimpact"
    },
    {
      "label": "Mental Health",
      "value": "mentalhealth"
    },
    {
      "label": "Kindness Matters",
      "value": "kindnessmatters"
    },
    {
      "label": "Gratitude",
      "value": "gratitude"
    },
    {
      "label": "Support Local",
      "value": "supportlocal"
    },
    {
      "label": "Love Where You Live",
      "value": "lovewhereyoulive"
    }
  ]
};


