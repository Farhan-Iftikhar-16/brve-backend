const mongoose = require('mongoose');

const hashTags = mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const HASHTAGS = module.exports = mongoose.model('HashTags', hashTags);

module.exports.getHashTags = async (req, res) => {
  const hashTags = await HASHTAGS.find({}).catch(() => {
    return res.status(500).json({status: 'Error', message: 'Error occurred while getting hash tags.'});
  });

  res.status(200).json({status: 'Success', hashTags: hashTags});
}
