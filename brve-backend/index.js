const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config')
const app = express();
const server = require('http').Server(app);
const deedController = require('./controllers/deed-controller');

mongoose.connect(config.mongoURL).then(async () => {
  console.log(`Connected to DB: ${config.mongoURL}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/public', express.static('public'));

app.use(cors());

app.options('*', cors());

app.use('/deeds', deedController);

server.listen(config.PORT, () => {
  console.log(`Server Running On Port: ${config.PORT}`)
})
// Go to the settings for your Google Account in the application or device you are trying to set up.
//   Replace your password with the 16-character password shown above.
//
//   Just like your normal password, this app password grants complete access to your Google Account.
//   You won't need to remember it, so don't write it down or share it with anyone.

